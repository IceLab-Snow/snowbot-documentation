export interface FunctionData {
  name: string;
  returns: string;
  description: string;
  tags?: string[];
  example?: string;
  isNew?: boolean;
}

export interface CategoryData {
  name: string;
  icon: string;
  color: string;
  functions: FunctionData[];
}

export interface ApiData {
  [key: string]: CategoryData;
}

export interface UserPreferences {
  darkMode: boolean;
  favorites: string[];
  recentlyViewed: string[];
}