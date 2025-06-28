// frontend/src/components/FunctionCard.tsx
import React from 'react';
import { Star, Copy, Check } from 'lucide-react';
import { FunctionData } from '../types';

interface FunctionCardProps {
  func: FunctionData & { category?: string };
  darkMode: boolean;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const FunctionCard: React.FC<FunctionCardProps> = ({ 
  func, 
  darkMode, 
  isFavorite, 
  onToggleFavorite 
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(func.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getReturnTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'void': 'color: #6b7280',
      'boolean': 'color: #10b981',
      'string': 'color: #3b82f6',
      'number': 'color: #f59e0b',
      'integer': 'color: #f59e0b',
      'double': 'color: #f97316',
      'table': 'color: #8b5cf6',
      'object': 'color: #ec4899'
    };
    return colors[type.toLowerCase()] || 'color: #6b7280';
  };

  return (
    <div 
      style={{
        backgroundColor: darkMode ? '#1f2937' : 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
        transition: 'all 0.3s'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <h3 style={{ 
          fontSize: '18px', 
          fontFamily: 'monospace', 
          fontWeight: 'bold',
          color: darkMode ? 'white' : '#111827'
        }}>
          {func.name}
        </h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleCopy}
            style={{
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: darkMode ? '#374151' : '#f3f4f6',
              cursor: 'pointer'
            }}
          >
            {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
          </button>
          <button
            onClick={onToggleFavorite}
            style={{
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: darkMode ? '#374151' : '#f3f4f6',
              cursor: 'pointer'
            }}
          >
            <Star size={16} fill={isFavorite ? '#f59e0b' : 'none'} color="#f59e0b" />
          </button>
        </div>
      </div>

      <div style={{ 
  fontSize: '14px', 
  fontFamily: 'monospace',
  marginBottom: '8px',
  color: getReturnTypeColor(func.returns)  // ✅ Correction
}}>
        {func.returns}
      </div>

      <p style={{ 
        fontSize: '14px',
        color: darkMode ? '#d1d5db' : '#4b5563',
        marginBottom: '12px'
      }}>
        {func.description}
      </p>

      {func.tags && func.tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {func.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '9999px',
                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                color: darkMode ? '#d1d5db' : '#6b7280'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default FunctionCard;