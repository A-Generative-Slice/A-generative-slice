---
name: Spline
description: Spline.design Skill for Google Antigravity IDE
---

# Spline.design Skill for Google Antigravity IDE

## Overview

**Spline.design** is an all-in-one, web-based collaborative 3D design platform that enables creators to build production-ready interactive real-time 3D experiences without requiring extensive coding knowledge [[16]]. The platform democratizes 3D design by making it accessible to designers of all backgrounds while maintaining professional-grade capabilities for enterprise teams [[5]].

---

## Core Capabilities

### 3D Design & Modeling
- **Parametric Objects & Polygonal Editing**: Create and modify 3D geometry with precision tools [[13]]
- **3D Sculpting**: Generate organic shapes with intuitive sculpting tools [[13]]
- **Boolean Operations**: Combine and subtract shapes for complex modeling [[2]]
- **Vector Networks**: Create custom shapes with a powerful vector network system [[30]]
- **Primitives Library**: Access pre-built 3D shapes and objects [[30]]

### Materials & Visual Effects
- **Layer-based Materials**: Create unique materials with multiple layers or use ready-made material library [[30]]
- **Visual Effects**: Enhance designs with shadows, blurs, glass, and 3D projections [[30]]
- **Real-time Rendering**: Preview changes instantly with high-quality rendering [[30]]
- **Texture & Color Mapping**: Apply detailed textures and color schemes to 3D objects [[13]]

### Animation & Interactivity
- **Timeline Animation**: Create complex animations with keyframe-based timeline [[30]]
- **States & Events System**: Add interactivity through trigger-based event system [[30]]
- **Physics Simulations**: Implement real-time physics and particle systems [[13]]
- **Game Controls**: Build 1st person and 3rd person interactive experiences [[13]]
- **Scroll-driven Animations**: Create scroll-based interactive web experiences [[3]]

### Collaboration Features
- **Real-time Collaboration**: Work with team members simultaneously with individual permissions [[13]]
- **Comments & Feedback**: Leave contextual comments on designs [[30]]
- **Team Libraries**: Share assets across team workspaces [[13]]
- **Version History**: Track changes and revert to previous versions (Enterprise) [[31]]

---

## Use Cases & Applications

### 1. Interactive Websites
- Embed 3D scenes directly into websites with responsive optimization [[20]]
- Create engaging landing pages with animated 3D elements [[14]]
- Build product showcases with interactive 3D mockups [[30]]

### 2. Product Design & Prototyping
- Design 3D product visualizations for client presentations [[30]]
- Create interactive prototypes for mobile and web applications [[30]]
- Generate 3D mockups for marketing materials [[30]]

### 3. Brand & Marketing
- Develop animated 3D logos and brand assets [[30]]
- Create immersive marketing experiences for campaigns [[30]]
- Build branded 3D web experiences for enterprise audiences [[30]]

### 4. Gamified Experiences
- Design interactive game-like interfaces for websites [[30]]
- Create educational 3D experiences with game controls [[13]]
- Build AR/XR experiences for emerging platforms [[31]]

### 5. Interior Design & Architecture
- Create 3D interior design visualizations for client approval [[17]]
- Build architectural walkthroughs with interactive navigation [[17]]
- Generate realistic material and lighting simulations [[17]]

### 6. Animated Characters
- Design and animate 3D characters for web and mobile [[30]]
- Create voice-reactive experiences with AI integration [[21]]
- Build interactive avatars for customer engagement [[30]]

### 7. Spatial Design for visionOS
- Design interactive 3D spatial content for Apple Vision Pro [[30]]
- Experience designs directly on Vision Pro with Spline Mirror [[30]]
- Create immersive spatial computing experiences [[30]]

---

## Platform Integrations

### Web Frameworks & Platforms
| Platform | Integration Type | Documentation |
|----------|-----------------|---------------|
| **Webflow** | Native Integration | Drop 3D scenes directly [[26]] |
| **Framer** | Native Integration | Embed interactive 3D content [[26]] |
| **Wix Studio** | Native Integration | Direct 3D scene embedding [[26]] |
| **HTML/JS** | Vanilla.js Runtime | Full Code API support [[22]] |
| **React** | React Wrapper Library | @splinetool/react-spline [[22]] |
| **Next.js** | Next.js Specific Library | Enhanced Next.js features [[22]] |

### Mobile Platforms
| Platform | Support Level | Export Format |
|----------|--------------|---------------|
| **iOS/Apple** | Full Support | Swift Code API, USDZ [[25]] |
| **Android** | Full Support | Kotlin Code API [[24]] |
| **visionOS** | Spatial Design | Spline Mirror App [[30]] |

### Code API Capabilities
The **Code API** enables developers to integrate interactive 3D experiences with custom code [[22]]:

- **Adjust Variables**: Retrieve and update variables in Spline scenes
- **Modify Properties**: Dynamically change position, scale, rotation, and more
- **Trigger Transitions**: Create animations based on custom events
- **Event Listeners**: React to real-time events within 3D scenes
- **Webhooks & APIs**: Connect to external services and data sources [[27]]
- **AI Integration**: OpenAI API integration for AI-powered features [[29]]

### Export Formats
- **Web**: GLTF, GLB, Spline Code (.splinecode)
- **Apple**: USDZ, Swift Code
- **Android**: Kotlin Code
- **Media**: JPG, PNG, MP4, GIF
- **3D Files**: STL, USDZ with color & texture [[31]]

---

## Technical Specifications

### Browser Requirements
- Modern web browsers (Chrome, Firefox, Safari, Edge)
- WebGL 2.0 support
- Minimum 4GB RAM recommended for complex scenes

### Performance Optimization
- Fully responsive and optimized for web deployment [[20]]
- Lazy loading for 3D assets
- Level-of-detail (LOD) management
- Efficient geometry and texture compression

### Spline Viewer Component
```html
<!-- Import Spline Viewer -->
<script 
    type="module" 
    src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js">
</script>

<!-- Add your 3D scene using the spline-viewer component -->
<spline-viewer 
    url="https://prod.spline.design/9951u9cumiw2Ehj8/scene.splinecode">
</spline-viewer>
```
