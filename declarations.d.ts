declare module 'react-websitecarbon-badge' {
    import * as React from 'react';
  
    interface WebsiteCarbonBadgeProps {
      url?: string;
      // Add other props if needed
    }
  
    const WebsiteCarbonBadge: React.FC<WebsiteCarbonBadgeProps>;
    export default WebsiteCarbonBadge;
  }