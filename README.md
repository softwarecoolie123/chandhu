# Birthday Website

A beautiful, interactive birthday celebration website with multiple sections and animations.

## Features

- **System Update Cover Page**: Gentle trick to start the experience
- **Welcome Section**: Typing animation with romantic messages
- **Birthday Reveal**: Special birthday announcement
- **Personal Message**: Heartfelt birthday message
- **Photo Gallery**: 3 beautiful memories (click to view)
- **Video Section**: Placeholder for birthday video
- **Interactive Surprises**: 4 special gifts including a beautiful flower animation
- **Final Message**: Signature with special animation

## Customization

### Adding Background Image
1. Place your background image in the `images/` folder
2. Name it `her-photo.jpg` (or update the CSS file)
3. The image will be automatically blurred and used as background

### Adding Photos to Gallery
1. Add your photos to the `images/` folder
2. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
3. The photos will appear when clicking on the memory items

### Customizing Messages
Edit the `script.js` file to customize:
- Typing messages in the `messages` array
- Photo descriptions in the `photoGallery` object
- Surprise messages in the `showSurpriseModal` function

## File Structure
```
new/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
├── images/             # Add your photos here
│   ├── her-photo.jpg   # Background image
│   ├── photo1.jpg      # Gallery photo 1
│   ├── photo2.jpg      # Gallery photo 2
│   └── photo3.jpg      # Gallery photo 3
└── README.md           # This file
```

## How to Use
1. Add your photos to the `images/` folder
2. Open `index.html` in a web browser
3. Enjoy the birthday celebration!

## Special Features
- Beautiful flower animation in gift 4
- Floating hearts background
- Gentle confetti effects
- Responsive design for all devices
- Smooth animations and transitions 