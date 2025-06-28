import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, Package, User, Map, Shield, Code2, Globe, Wrench, ShoppingCart, MessageSquare, Hammer, Bird } from 'lucide-react';
import apiService from './services/apiService';
import { ApiData, FunctionData } from './types';
import completeInitialData from './data/initialData';
import FunctionCard from './components/FunctionCard';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [apiData, setApiData] = useState<ApiData>(completeInitialData);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Try to load from API
      const data = await apiService.getAllFunctions();
      if (Object.keys(data).length === 0) {
        // If API is empty, initialize with our complete data
        await apiService.initializeDatabase({ 
          functions: Object.entries(completeInitialData).flatMap(([category, data]) =>
            data.functions.map(func => ({ ...func, category }))
          )
        });
      } else {
        setApiData(data);
      }
      
      const prefs = await apiService.getUserPreferences();
      setDarkMode(prefs.darkMode);
      setFavorites(prefs.favorites);
    } catch (error) {
      console.error('Using local data:', error);
      // Use local data if API fails
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (funcName: string) => {
    const newFavorites = favorites.includes(funcName)
      ? favorites.filter(f => f !== funcName)
      : [...favorites, funcName];
    setFavorites(newFavorites);
    
    apiService.updateUserPreferences({
      darkMode,
      favorites: newFavorites,
      recentlyViewed: []
    }).catch(console.error);
  };

  const getFilteredFunctions = () => {
    let allFunctions: (FunctionData & { category: string })[] = [];
    
    Object.entries(apiData).forEach(([category, data]) => {
      if (selectedCategory === 'all' || selectedCategory === category || 
          (selectedCategory === 'favorites' && data.functions.some(f => favorites.includes(f.name)))) {
        data.functions.forEach(func => {
          if (selectedCategory === 'favorites' && !favorites.includes(func.name)) return;
          
          if (!searchQuery || 
              func.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              func.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              func.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
            allFunctions.push({ ...func, category });
          }
        });
      }
    });
    
    return allFunctions;
  };

  const iconMap: any = { 
    User, Package, Map, Shield, Code2, Globe, ArrowRightLeft: Package,
    Wrench, ShoppingCart, MessageSquare, Hammer, Bird 
  };

  const totalFunctions = Object.values(apiData).reduce((acc, cat) => acc + cat.functions.length, 0);

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '64px',
            height: '64px',
            border: '4px solid #06b6d4',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            margin: '0 auto',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ marginTop: '16px', color: darkMode ? '#9ca3af' : '#6b7280' }}>
            Loading Snowbot Documentation...
          </p>
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: darkMode ? '#111827' : '#f9fafb' }}>
      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: 0
              }}>
                Snowbot Documentation
              </h1>
              <p style={{ 
                fontSize: '14px', 
                color: darkMode ? '#9ca3af' : '#6b7280',
                margin: '4px 0 0 0'
              }}>
                {totalFunctions} functions disponibles
              </p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: '8px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                cursor: 'pointer'
              }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 16px', display: 'flex', gap: '24px' }}>
        {/* Sidebar */}
        <div style={{
          width: '256px',
          backgroundColor: darkMode ? '#1f2937' : 'white',
          borderRadius: '12px',
          padding: '16px',
          height: 'fit-content',
          position: 'sticky',
          top: '100px'
        }}>
          <h2 style={{ 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: darkMode ? 'white' : '#111827'
          }}>
            Categories
          </h2>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '8px 12px',
                borderRadius: '8px',
                border: 'none',
                background: selectedCategory === 'all' 
                  ? 'linear-gradient(to right, #06b6d4, #3b82f6)'
                  : 'transparent',
                color: selectedCategory === 'all' ? 'white' : (darkMode ? '#d1d5db' : '#374151'),
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>All Functions</span>
              <span style={{ fontSize: '12px', opacity: 0.7 }}>{totalFunctions}</span>
            </button>
            
            {favorites.length > 0 && (
              <button
                onClick={() => setSelectedCategory('favorites')}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: 'none',
                  background: selectedCategory === 'favorites' 
                    ? 'linear-gradient(to right, #f59e0b, #ef4444)'
                    : 'transparent',
                  color: selectedCategory === 'favorites' ? 'white' : (darkMode ? '#d1d5db' : '#374151'),
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>⭐ Favorites</span>
                <span style={{ fontSize: '12px', opacity: 0.7 }}>{favorites.length}</span>
              </button>
            )}
            
            <div style={{ 
              borderTop: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`, 
              margin: '8px 0' 
            }}></div>
            
            {Object.entries(apiData).map(([key, category]) => {
              const Icon = iconMap[category.icon] || Code2;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: selectedCategory === key
                      ? `linear-gradient(to right, ${category.color.replace('from-', '#').replace(' to-', ', #').replace('-500', '').replace('-600', '')})`
                      : 'transparent',
                    color: selectedCategory === key ? 'white' : (darkMode ? '#d1d5db' : '#374151'),
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Icon size={16} />
                  <span style={{ flex: 1 }}>{category.name}</span>
                  <span style={{ fontSize: '12px', opacity: 0.7 }}>
                    {category.functions.length}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1 }}>
          {/* Search */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ position: 'relative' }}>
              <Search 
                size={20} 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#9ca3af'
                }} 
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search functions..."
                style={{
                  width: '100%',
                  paddingLeft: '40px',
                  paddingRight: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  borderRadius: '12px',
                  backgroundColor: darkMode ? '#1f2937' : 'white',
                  border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                  color: darkMode ? 'white' : '#111827',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Results count */}
          <p style={{ 
            marginBottom: '16px', 
            color: darkMode ? '#9ca3af' : '#6b7280',
            fontSize: '14px'
          }}>
            {getFilteredFunctions().length} functions found
            {selectedCategory !== 'all' && selectedCategory !== 'favorites' && 
              ` in ${apiData[selectedCategory]?.name}`
            }
            {selectedCategory === 'favorites' && ' in favorites'}
          </p>

          {/* Functions Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '16px'
          }}>
            {getFilteredFunctions().map((func, index) => (
              <FunctionCard
                key={`${func.category}-${func.name}-${index}`}
                func={func}
                darkMode={darkMode}
                isFavorite={favorites.includes(func.name)}
                onToggleFavorite={() => toggleFavorite(func.name)}
              />
            ))}
          </div>

          {getFilteredFunctions().length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: darkMode ? '#9ca3af' : '#6b7280' }}>
              <p style={{ fontSize: '18px' }}>No functions found</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>
                Try adjusting your search or selecting a different category
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;