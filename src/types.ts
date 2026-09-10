export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  iconName: 'instagram' | 'facebook' | 'youtube' | 'linkedin' | 'blog' | 'website' | 'spotify';
  featured?: boolean;
  tag?: string;
  accentColor?: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  region: string;
  description: string;
  established?: string;
}
