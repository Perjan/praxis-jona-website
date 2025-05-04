# TV Slideshow PRD

## Overview
A full-screen slideshow application designed for smart TVs in medical office waiting areas. The application displays rotating images with QR codes that link to the practice's website, allowing patients to learn about services while waiting.

## Technical Requirements

### Supported Platforms
- Samsung Smart TVs
- LG Smart TVs
- Sony Smart TVs
- Any modern web browser with full-screen capability

### Display Requirements
- Resolution: 4K (3840 x 2160)
- Aspect Ratio: 16:9
- Full-screen display mode
- Browser-based application

## Content Management

### Image Specifications
- Formats: PNG, JPG
- Resolution: 4K (3840 x 2160)
- Manual upload process through codebase
- Storage location: `/public/tv/` directory

### Slideshow Configuration
- Slide duration: 20 seconds per image
- Continuous loop/repeat
- Smooth transition effects between slides
- No manual controls required

## QR Code Implementation
- Pre-created QR codes embedded in images
- QR codes link to practice website
- URL includes referrer parameter for tracking TV location
- Example URL structure: `https://practice-website.com?ref=tv-location-1`

## Security
- Access protected by passcode
- Passcode required to view the slideshow
- No additional authentication needed for QR code links

## Maintenance
- Updates deployed through website refresh
- No remote management required
- TV browser refresh needed to load new content

## Implementation Notes
- Responsive design to ensure proper display on all supported TVs
- Optimized image loading to prevent performance issues
- Fallback handling for offline scenarios
- Browser cache management for smooth transitions

## Future Considerations
- Potential for dynamic content updates
- Analytics integration for QR code tracking
- Remote management capabilities
- Emergency message display system
