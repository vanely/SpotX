// Example usage of public assets in React components
import { getIconUrl, getImageUrl, getPublicAssetUrl } from '@/lib/utils';

// Example component showing how to use public assets
export const AssetExample = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Using icons */}
      <img 
        src={getIconUrl('logo.svg')} 
        alt="SpotX Logo" 
        className="w-8 h-8"
      />
      
      {/* Using images */}
      <img 
        src={getImageUrl('hero/spotx-hero.jpg')} 
        alt="SpotX Hero" 
        className="w-32 h-20 object-cover rounded"
      />
      
      {/* Direct public asset access */}
      <img 
        src={getPublicAssetUrl('favicon.svg')} 
        alt="Favicon" 
        className="w-6 h-6"
      />
    </div>
  );
};

// Available utility functions:
// - getPublicAssetUrl(path: string): string - Get URL for any public asset
// - getIconUrl(iconName: string): string - Get URL for icons in assets/icons/
// - getImageUrl(imagePath: string): string - Get URL for images in assets/images/
