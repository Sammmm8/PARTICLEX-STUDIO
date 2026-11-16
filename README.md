# PARTICLEX-STUDIO — Hand Particle Playground

React + Three.js + MediaPipe hand tracking website with a glowing viral-style particle effect.

## Requirements
- Node.js LTS
- VS Code (or another editor)
- Chrome or Edge
- Webcam and internet for the first MediaPipe model download

## Run locally
Open this folder in VS Code, open Terminal → New Terminal, then run:

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite (usually `http://localhost:5173`) and click **ENABLE WEBCAM**.

## Controls
- Move your hand to move the interaction point.
- Open palm: push particles outward.
- Close hand: pull particles toward your hand.
- Pinch thumb and index finger: focus particles near your hand.
- Choose Sphere, Galaxy, Heart, or Wave.
- Pick a particle color from the palette.

## What is optimized
- Balanced 6,200-particle count and capped device pixel ratio.
- GPU shader-based soft particle glow and twinkle.
- Precomputed shape positions instead of recalculating each frame.
- Smoothed hand coordinates to reduce webcam tracking jitter.
- One-hand tracking for lower detection overhead.
- Camera video requested at a practical 640×480 / 30 fps target.

## Privacy and browser notes
Camera frames are processed locally in the browser by MediaPipe and are not uploaded by this project. Camera access requires localhost or HTTPS. The MediaPipe WASM runtime and model are fetched from public CDNs the first time tracking starts.

## Particle shapes
The visualizer includes 13 selectable particle formations: Sphere, Galaxy, Heart, Wave, Star, Saturn, Butterfly, Flower, DNA, Tornado, Firework, Infinity, and Text. Select **Text** to type a name or short word (up to 14 characters); the particles reform into the text.
