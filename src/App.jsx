import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import { Camera, CameraOff, Expand, Hand, Sparkles, MousePointer2, WandSparkles, Zap } from 'lucide-react';

const COUNT = 6200;
const MODEL_URL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
const PALETTES = ['#a78bfa', '#54e7d4', '#ff83c8', '#ffd080', '#d9e8ff'];

const textPointCache = new Map();
function getTextPoints(label) {
  const key = (label || 'YOUR NAME').toUpperCase().slice(0, 14);
  if (textPointCache.has(key)) return textPointCache.get(key);
  const canvas = document.createElement('canvas');
  canvas.width = 700; canvas.height = 220;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  let size = 130;
  ctx.font = `800 ${size}px Manrope, Arial, sans-serif`;
  while (ctx.measureText(key).width > 650 && size > 45) {
    size -= 5; ctx.font = `800 ${size}px Manrope, Arial, sans-serif`;
  }
  ctx.fillText(key, 350, 110);
  const pixels = ctx.getImageData(0, 0, 700, 220).data;
  const samples = [];
  for (let y = 0; y < 220; y += 3) for (let x = 0; x < 700; x += 3) {
    if (pixels[(y * 700 + x) * 4 + 3] > 100) samples.push([(x - 350) / 82, (110 - y) / 82, Math.sin(x * .08 + y * .04) * .12]);
  }
  const points = samples.length ? samples : [[0, 0, 0]];
  textPointCache.set(key, points);
  return points;
}

function targetFor(i, mode, text = 'YOUR NAME') {
  const u = (i / COUNT) * Math.PI * 2;
  const v = Math.acos(1 - 2 * ((i * 0.61803398875) % 1));
  const sphere = () => [2.65 * Math.sin(v) * Math.cos(u), 2.65 * Math.cos(v), 2.65 * Math.sin(v) * Math.sin(u)];
  if (mode === 'Heart') {
    const a = u;
    const x = 16 * Math.pow(Math.sin(a), 3);
    const y = 13 * Math.cos(a) - 5 * Math.cos(2*a) - 2 * Math.cos(3*a) - Math.cos(4*a);
    return [x * 0.105, y * 0.105, Math.sin(i * 12.989) * 0.36];
  }
  if (mode === 'Galaxy') {
    const arm = i % 5, r = 0.16 + (i / COUNT) * 4.45;
    const a = r * 1.58 + arm * Math.PI * 2 / 5;
    const jitter = Math.sin(i * 17.17) * 0.13;
    return [Math.cos(a) * (r + jitter), Math.sin(a) * (r + jitter) * 0.63, Math.sin(i * 8.31) * 0.2];
  }
  if (mode === 'Wave') {
    const x = ((i % 100) / 99 - .5) * 8, z = (Math.floor(i / 100) / 62 - .5) * 5;
    return [x, Math.sin(x * 1.45 + z * 1.7) * .65, z];
  }
  if (mode === 'Star') {
    const a = u, sector = ((a / (Math.PI * 2)) * 10) % 1;
    const edge = Math.floor((a / (Math.PI * 2)) * 10);
    const r = (edge % 2 === 0 ? 2.9 : 1.25) * (.55 + .45 * ((i * 37 % 101) / 100));
    return [Math.cos(a) * r, Math.sin(a) * r, Math.sin(i * 2.17) * .42];
  }
  if (mode === 'Saturn') {
    if (i % 3 === 0) return sphere();
    const a = u * 2.1, r = 3.0 + ((i * 17 % 100) / 100) * 1.35;
    const tilt = .48;
    return [Math.cos(a) * r, Math.sin(a) * r * tilt + Math.sin(a) * .25, Math.sin(a) * r * .72];
  }
  if (mode === 'Butterfly') {
    const t = u, wing = i % 2 ? 1 : -1;
    const r = .35 + 2.65 * Math.abs(Math.sin(t * 2.0)) * (0.65 + .35 * Math.cos(t * 4));
    return [wing * (0.25 + r * Math.abs(Math.cos(t))), Math.sin(t * 2) * 1.75, Math.cos(t * 2) * .55 + Math.sin(i * .7) * .12];
  }
  if (mode === 'Flower') {
    const a = u, r = 1.0 + 1.75 * Math.abs(Math.cos(5 * a));
    return [Math.cos(a) * r, Math.sin(a) * r, Math.sin(5 * a) * .32 + Math.sin(i * .3) * .12];
  }
  if (mode === 'DNA') {
    const t = (i / COUNT) * Math.PI * 12, strand = i % 2 ? 0 : Math.PI;
    const a = t + strand;
    return [Math.cos(a) * 1.35, ((i / COUNT) - .5) * 6.2, Math.sin(a) * 1.35];
  }
  if (mode === 'Tornado') {
    const t = i / COUNT, a = t * Math.PI * 24;
    const r = .25 + t * 2.8;
    return [Math.cos(a) * r, (t - .5) * 5.8, Math.sin(a) * r];
  }
  if (mode === 'Firework') {
    const ray = i % 32, a = ray / 32 * Math.PI * 2;
    const r = .25 + ((Math.floor(i / 32) * 37) % 100) / 100 * 3.4;
    const spread = Math.sin(i * 12.7) * .16;
    return [Math.cos(a + spread) * r, Math.sin(a + spread) * r, Math.sin(ray * 4.1) * r * .28];
  }
  if (mode === 'Infinity') {
    const t = u, denom = 1 + Math.cos(t) ** 2;
    return [3.6 * Math.sin(t) / denom, 2.15 * Math.sin(t) * Math.cos(t) / denom, Math.sin(i * 8.7) * .32];
  }
  if (mode === 'Text') {
    const points = getTextPoints(text);
    const p = points[(i * 97) % points.length];
    return [p[0], p[1], p[2] + Math.sin(i * .17) * .08];
  }
  return sphere();
}

function ParticleScene({ hand, mode, color, cameraOn, text }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const handRef = useRef(hand);
  const modeRef = useRef(mode);
  const colorRef = useRef(color);
  const textRef = useRef(text);
  const cameraRef = useRef(cameraOn);
  useEffect(() => { handRef.current = hand; }, [hand]);
  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { colorRef.current = color; }, [color]);
  useEffect(() => { textRef.current = text; }, [text]);
  useEffect(() => { cameraRef.current = cameraOn; }, [cameraOn]);

  useEffect(() => {
    const host = mountRef.current;
    if (!host) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, host.clientWidth / host.clientHeight, .1, 100);
    camera.position.z = 10;
    const renderer = new THREE.WebGLRenderer({
      antialias: false, alpha: true, powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const positions = new Float32Array(COUNT * 3);
    const destinations = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const phases = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      const p = targetFor(i, 'Sphere', textRef.current);
      const j = i * 3;
      positions[j] = p[0] + Math.sin(i * 3.1) * .22;
      positions[j+1] = p[1] + Math.cos(i * 2.7) * .22;
      positions[j+2] = p[2];
      destinations.set(p, j);
      sizes[i] = .65 + ((i * 37) % 100) / 100 * 1.8;
      phases[i] = (i % 997) / 997;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(colorRef.current) },
        uTime: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float aSize;
        attribute float aPhase;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vPhase;
        void main() {
          vPhase = aPhase;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float twinkle = 0.78 + 0.22 * sin(uTime * 1.7 + aPhase * 38.0);
          gl_PointSize = aSize * uPixelRatio * twinkle * (34.0 / -mvPosition.z);
          gl_PointSize = clamp(gl_PointSize, 1.0, 9.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vPhase;
        void main() {
          vec2 p = gl_PointCoord - vec2(0.5);
          float d = length(p);
          float core = smoothstep(0.20, 0.0, d);
          float glow = exp(-d * 10.0) * 0.62;
          float alpha = core + glow;
          vec3 tint = mix(uColor, vec3(0.42, 0.88, 1.0), vPhase * 0.28);
          gl_FragColor = vec4(tint, alpha);
          if (gl_FragColor.a < 0.015) discard;
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    sceneRef.current = { destinations, geometry, positions, velocities, material, renderer, points };

    const fillTargets = (shape) => {
      for (let i = 0; i < COUNT; i++) destinations.set(targetFor(i, shape, textRef.current), i * 3);
    };
    fillTargets(modeRef.current);

    const clock = new THREE.Clock();
    renderer.setAnimationLoop(() => {
      const elapsed = clock.getElapsedTime();
      const currentHand = handRef.current;
      const isTracking = cameraRef.current && currentHand?.detected;
      const hx = (currentHand.x - .5) * 8.4;
      const hy = (.5 - currentHand.y) * 5.2;
      const open = currentHand.open;
      const pinch = currentHand.pinch;

      for (let i = 0; i < COUNT; i++) {
        const j = i * 3;
        let tx = destinations[j], ty = destinations[j+1], tz = destinations[j+2];
        // A subtle breathing motion keeps the field alive without recalculating shapes.
        tx += Math.sin(elapsed * .75 + i * .013) * .025;
        ty += Math.cos(elapsed * .7 + i * .011) * .025;

        if (isTracking) {
          const dx = positions[j] - hx;
          const dy = positions[j+1] - hy;
          const d = Math.sqrt(dx*dx + dy*dy) + .001;
          const radius = open ? 2.25 : 1.65;
          if (d < radius) {
            const strength = (1 - d / radius) * (open ? 1.45 : -1.35);
            tx += (dx / d) * strength;
            ty += (dy / d) * strength;
            tz += Math.sin(i * .08 + elapsed * 2) * strength * .15;
          }
          if (pinch && d < 2.6) {
            tx += (hx - positions[j]) * .075;
            ty += (hy - positions[j+1]) * .075;
          }
        }
        // Damped spring motion: responsive without harsh jitter.
        velocities[j] = (velocities[j] + (tx - positions[j]) * .022) * .885;
        velocities[j+1] = (velocities[j+1] + (ty - positions[j+1]) * .022) * .885;
        velocities[j+2] = (velocities[j+2] + (tz - positions[j+2]) * .022) * .885;
        positions[j] += velocities[j];
        positions[j+1] += velocities[j+1];
        positions[j+2] += velocities[j+2];
      }
      geometry.attributes.position.needsUpdate = true;
      points.rotation.y = Math.sin(elapsed * .12) * .13;
      points.rotation.x = Math.cos(elapsed * .10) * .06;
      material.uniforms.uTime.value = elapsed;
      material.uniforms.uColor.value.set(colorRef.current);
      renderer.render(scene, camera);
    });

    const resize = () => {
      const w = host.clientWidth, h = host.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      material.uniforms.uPixelRatio.value = renderer.getPixelRatio();
    };
    window.addEventListener('resize', resize);
    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener('resize', resize);
      geometry.dispose(); material.dispose(); renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    const data = sceneRef.current;
    if (!data) return;
    for (let i = 0; i < COUNT; i++) data.destinations.set(targetFor(i, mode, textRef.current), i * 3);
  }, [mode, text]);

  return <div className="particle-stage" ref={mountRef} />;
}

export default function App() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const rafRef = useRef(null);
  const lastVideoTime = useRef(-1);
  const smoothedHand = useRef({ x: .5, y: .5 });
  const [cameraOn, setCameraOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hand, setHand] = useState({ detected: false, x: .5, y: .5, open: false, pinch: false });
  const [mode, setMode] = useState('Sphere');
  const [text, setText] = useState('YOUR NAME');
  const [color, setColor] = useState(PALETTES[0]);
  const [showCamera, setShowCamera] = useState(true);

  async function startCamera() {
    setError('');
    setLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 30, max: 30 } },
        audio: false
      });
      videoRef.current.srcObject = stream;
      await videoRef.current.play();
      if (!landmarkerRef.current) {
        const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm");
        landmarkerRef.current = await HandLandmarker.createFromOptions(vision, {
          baseOptions: { modelAssetPath: MODEL_URL, delegate: 'GPU' },
          runningMode: 'VIDEO',
          numHands: 1,
          minHandDetectionConfidence: .58,
          minTrackingConfidence: .58,
          minHandPresenceConfidence: .55
        });
      }
      setCameraOn(true);
      setLoading(false);
      detectLoop();
    } catch (e) {
      setLoading(false);
      setError(e?.name === 'NotAllowedError'
        ? 'Camera permission was blocked. Allow camera access in your browser settings.'
        : 'Could not start hand tracking. Check your webcam and internet connection, then try again.');
      stopCamera();
    }
  }

  function detectLoop() {
    if (!videoRef.current || !landmarkerRef.current) return;
    const video = videoRef.current;
    if (video.readyState >= 2 && video.currentTime !== lastVideoTime.current) {
      const result = landmarkerRef.current.detectForVideo(video, performance.now());
      lastVideoTime.current = video.currentTime;
      if (result.landmarks?.length) {
        const lm = result.landmarks[0];
        const wrist = lm[0];
        const tips = [lm[8], lm[12], lm[16], lm[20]];
        const avg = tips.reduce((sum, p) => sum + Math.hypot(p.x-wrist.x, p.y-wrist.y), 0) / tips.length;
        const pinch = Math.hypot(lm[4].x-lm[8].x, lm[4].y-lm[8].y) < .065;
        const rawX = 1 - lm[9].x;
        const rawY = lm[9].y;
        const smoothing = .34;
        smoothedHand.current.x += (rawX - smoothedHand.current.x) * smoothing;
        smoothedHand.current.y += (rawY - smoothedHand.current.y) * smoothing;
        setHand({
          detected: true,
          x: smoothedHand.current.x,
          y: smoothedHand.current.y,
          open: avg > .34,
          pinch
        });
      } else {
        setHand(h => ({ ...h, detected: false }));
      }
    }
    rafRef.current = requestAnimationFrame(detectLoop);
  }

  function stopCamera() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const stream = videoRef.current?.srcObject;
    stream?.getTracks().forEach(track => track.stop());
    if (videoRef.current) videoRef.current.srcObject = null;
    setCameraOn(false);
    setHand({ detected: false, x: .5, y: .5, open: false, pinch: false });
  }

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    videoRef.current?.srcObject?.getTracks().forEach(track => track.stop());
    landmarkerRef.current?.close();
  }, []);

  async function fullscreen() {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  }

  const modes = ['Sphere', 'Galaxy', 'Heart', 'Wave', 'Star', 'Saturn', 'Butterfly', 'Flower', 'DNA', 'Tornado', 'Firework', 'Infinity', 'Text'];
  return (
    <main className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark"><Sparkles size={17}/></span> PARTICLEX<span className="brand-muted">STUDIO</span></a>
        <div className="live-pill"><span className={cameraOn ? 'live-dot active' : 'live-dot'} />{cameraOn ? 'HAND TRACKING LIVE' : 'CAMERA STANDBY'}</div>
        <button className="icon-button" onClick={fullscreen} title="Fullscreen"><Expand size={17}/></button>
      </header>

      <section className="hero">
        <div className="eyebrow"><span /> VIRAL HAND-TRACKING EXPERIENCE</div>
        <h1>Your hands.<br/><span>Your universe.</span></h1>
        <p className="subtitle">Move, pinch and play — watch light follow your every gesture.</p>
      </section>

      <section className="workspace">
        <div className="visual-card">
          <div className="visual-top">
            <div><span className="tiny-label">LIVE VISUALIZER</span><div className="visual-title">Cosmic particle field <span className="status-dot"/></div></div>
            <div className="particle-count">6.2K <span>GLOWING PARTICLES</span></div>
          </div>
          <ParticleScene hand={hand} mode={mode} color={color} cameraOn={cameraOn} text={text} />
          {cameraOn && hand.detected && <div className="tracking-reticle" style={{left:`${hand.x*100}%`,top:`${hand.y*100}%`}}><span/></div>}
          <div className="visual-hint"><MousePointer2 size={14}/> {hand.detected ? (hand.pinch ? 'PINCH · FOCUS' : hand.open ? 'OPEN PALM · PUSH OUT' : 'HAND DETECTED · PULL IN') : 'ENABLE WEBCAM TO CONTROL THE PARTICLES'}</div>
          <div className="visual-bottom">
            <div className="mode-switch">
              {modes.map(m => <button key={m} onClick={() => setMode(m)} className={mode === m ? 'mode active' : 'mode'}>{m}</button>)}
            </div>
            <div className="color-picks">
              {PALETTES.map(c => <button key={c} aria-label={`Set particle color ${c}`} onClick={() => setColor(c)} className={color === c ? 'swatch selected' : 'swatch'} style={{'--swatch':c}} />)}
            </div>
          </div>
          {mode === 'Text' && <input className="shape-text-input" value={text} maxLength={14} onChange={e => setText(e.target.value.toUpperCase())} aria-label="Particle text" placeholder="Type your name" />}
        </div>

        <aside className="side-panel">
          <div className="panel-heading"><div><span className="tiny-label">YOUR CAMERA</span><h2>Hand tracking</h2></div><span className="camera-icon"><Camera size={18}/></span></div>
          <div className="camera-frame">
            <video ref={videoRef} className={cameraOn && showCamera ? 'webcam visible' : 'webcam'} autoPlay playsInline muted />
            {!cameraOn && <div className="camera-placeholder"><div className="camera-orbit"><Camera size={25}/></div><strong>Your camera preview</strong><span>Camera stays off until you enable it.</span></div>}
            {cameraOn && !showCamera && <div className="camera-hidden"><CameraOff size={22}/><span>Preview hidden</span></div>}
            {cameraOn && <div className="camera-tag"><span className="live-dot active"/> LIVE</div>}
          </div>
          <button className={cameraOn ? 'camera-button stop' : 'camera-button'} onClick={cameraOn ? stopCamera : startCamera} disabled={loading}>
            {loading ? <span className="spinner"/> : cameraOn ? <CameraOff size={17}/> : <Camera size={17}/>}
            {loading ? 'LOADING HAND TRACKER…' : cameraOn ? 'STOP CAMERA' : 'ENABLE WEBCAM'}
          </button>
          {error && <p className="error-message">{error}</p>}
          {cameraOn && <button className="text-button" onClick={() => setShowCamera(v => !v)}>{showCamera ? 'Hide camera preview' : 'Show camera preview'}</button>}
          <div className="divider"/>
          <div className="gesture-heading"><Hand size={17}/><span>GESTURE CONTROLS</span></div>
          <div className="gesture-row"><span className="gesture-symbol">✋</span><div><strong>Open palm</strong><small>Send particles flying outward</small></div><span className="gesture-state">{hand.detected && hand.open ? 'ACTIVE' : '—'}</span></div>
          <div className="gesture-row"><span className="gesture-symbol">✊</span><div><strong>Close your hand</strong><small>Pull particles toward your hand</small></div><span className="gesture-state">{hand.detected && !hand.open ? 'ACTIVE' : '—'}</span></div>
          <div className="gesture-row"><span className="gesture-symbol">🤏</span><div><strong>Pinch thumb + finger</strong><small>Focus particles near your hand</small></div><span className="gesture-state">{hand.detected && hand.pinch ? 'ACTIVE' : '—'}</span></div>
          <p className="privacy-note">🔒 Camera processing stays in your browser. Video is not uploaded by this website.</p>
        </aside>
      </section>
      <footer><span>BUILT FOR CURIOUS HANDS</span><span>MOVE · CREATE · PLAY</span><span>MEDIAPIPE + THREE.JS</span></footer>
    </main>
  );
}
