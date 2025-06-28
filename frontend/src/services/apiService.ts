import { ApiData, UserPreferences } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  async getAllFunctions(): Promise<ApiData> {
    try {
      const response = await fetch(`${API_URL}/functions`);
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      return {};
    }
  }

  async getUserPreferences(): Promise<UserPreferences> {
    const userId = localStorage.getItem('userId') || 'default';
    try {
      const response = await fetch(`${API_URL}/preferences/${userId}`);
      return await response.json();
    } catch (error) {
      return { darkMode: true, favorites: [], recentlyViewed: [] };
    }
  }

  async updateUserPreferences(prefs: UserPreferences): Promise<void> {
    const userId = localStorage.getItem('userId') || 'default';
    try {
      await fetch(`${API_URL}/preferences/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prefs)
      });
    } catch (error) {
      console.error('Failed to save preferences:', error);
    }
  }

  async initializeDatabase(data: any): Promise<void> {
    try {
      await fetch(`${API_URL}/initialize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Failed to initialize:', error);
    }
  }
}

export default new ApiService();