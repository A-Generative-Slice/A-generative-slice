# The Floating Robot World - 3D Portfolio

A modern, responsive, interactive 3D portfolio website built with React, Three.js, and Tailwind CSS.

## Features
- **Robot Companion:** A low-poly ball robot that follows your cursor.
- **Interactive Navigation:** Floating 3D objects representing site sections.
- **Dynamic DOF:** Focus shifts smoothly between the robot and selected navigation items.
- **Glassmorphism UI:** Modern, translucent cards for content display.
- **Optimized:** Designed for performance on 8GB RAM hardware.

## Customization

### Replacing Placeholder Models
1. Download or export your `.glb` models from Blender.
2. Place them in the `public/models/` directory.
3. Update the `modelPath` prop in `src/components/Scene.tsx` for each `FloatingNavObject`:
   ```tsx
   <FloatingNavObject 
     id="about" 
     modelPath="/models/about_icon.glb" 
     // ...
   />
   ```

### Performance Tips
- Use the **Decimate Modifier** in Blender to keep poly counts low.
- Bake lighting and shadows into textures if using complex scenes.
- Use `useGLTF.preload(path)` for critical assets.

## Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment
The project is configured for GitHub Pages. Build the project and deploy the `dist` folder to your `gh-pages` branch. The `base: './'` config in `vite.config.ts` ensures relative paths work correctly.
