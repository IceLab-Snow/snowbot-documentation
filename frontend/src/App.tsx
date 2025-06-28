import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, Star, Package, User, Map, Shield, Code2 } from 'lucide-react';
import apiService from './services/apiService';
import { ApiData, FunctionData, UserPreferences } from './types';

// Données initiales de démonstration
const demoData: ApiData = {
  character: {
    name: 'Character',
    icon: 'User',
    color: 'from-blue-500 to-cyan-500',
    functions: [
      { name: 'character:name()', returns: 'String', description: 'Retourne le nom du personnage', tags: ['info'] },
      { name: 'character:level()', returns: 'Integer', description: 'Retourne le niveau', tags: ['info'] },
      { name: 'character:kamas()', returns: 'Number', description: 'Retourne les kamas', tags: ['economy'] }
    ]
  },
  inventory: {
    name: 'Inventory', 
    icon: 'Package',
    color: 'from-green-500 to-emerald-500',
    functions: [
      { name: 'inventory:itemCount(id)', returns: 'Integer', description: 'Nombre d\'objets', tags: ['count'] },
      { name: 'inventory:useItem(id)', returns: 'Boolean', description: 'Utilise un objet', tags: ['action'] }
    ]
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [apiData, setApiData] = useState<ApiData>(demoData);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await apiService.getAllFunctions();
      if (Object.keys(data).length > 0) {
        setApiData(data);
      }
      
      const prefs = await apiService.getUserPreferences();
      setDarkMode(prefs.darkMode);
      setFavorites(prefs.favorites);
    } catch (error) {
      console.error('Error loading data:', error);
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
    });
  };

  const getFilteredFunctions = () => {
    let allFunctions: (FunctionData & { category: string })[] = [];
    
    Object.entries(apiData).forEach(([category, data]) => {
      if (selectedCategory === 'all' || selectedCategory === category) {
        data.functions.forEach(func => {
          if (!searchQuery || 
              func.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              func.description.toLowerCase().includes(searchQuery.toLowerCase())) {
            allFunctions.push({ ...func, category });
          }
        });
      }
    });
    
    return allFunctions;
  };

  const iconMap: any = { User, Package, Map, Shield, Code2 };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Loading Snowbot Documentation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Snowbot Documentation
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className={`w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-4`}>
            <h2 className="font-bold mb-4">Categories</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-3 py-2 rounded-lg ${
                  selectedCategory === 'all' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                    : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                All Functions
              </button>
              {Object.entries(apiData).map(([key, category]) => {
                const Icon = iconMap[category.icon] || Code2;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center space-x-2 ${
                      selectedCategory === key
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search functions..."
                  className={`w-full pl-10 pr-4 py-3 rounded-xl ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } border focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                />
              </div>
            </div>

            {/* Functions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {getFilteredFunctions().map((func, index) => (
                <div
                  key={index}
                  className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-mono font-semibold">{func.name}</h3>
                    <button
                      onClick={() => toggleFavorite(func.name)}
                      className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                    >
                      <Star className={`w-4 h-4 ${favorites.includes(func.name) ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                    </button>
                  </div>
                  <div className="text-sm text-cyan-500 font-mono mb-2">{func.returns}</div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {func.description}
                  </p>
                  {func.tags && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {func.tags.map((tag, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded-full ${
                          darkMode ? 'bg-gray-700' : 'bg-gray-100'
                        }`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {getFilteredFunctions().length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg">No functions found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;