import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function EnergyScene() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas.parentElement;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' }); }
    catch { return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, .1, 40);
    camera.position.z = 8;
    const group = new THREE.Group();
    scene.add(group);
    const rings = [];
    for (let j = 0; j < 12; j++) {
      const points = [];
      for (let i = 0; i <= 240; i++) {
        const a = i / 240 * Math.PI * 2;
        const r = 2.4 + Math.sin(a * 5 + j * .5) * .065 + j * .012;
        points.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, Math.sin(a * 3 + j * .3) * .16));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({color: j % 3 === 0 ? 0xb8efff : 0x139de0, transparent: true, opacity: j % 3 === 0 ? .48 : .2, blending: THREE.AdditiveBlending});
      const ring = new THREE.Line(geometry, material);
      group.add(ring); rings.push(ring);
    }
    const dust = new Float32Array(240 * 3);
    for (let i = 0; i < 240; i++) {
      const a = i * 2.39996;
      const r = 2.7 + (i % 17) / 6;
      dust[i * 3] = Math.cos(a) * r;
      dust[i * 3 + 1] = Math.sin(a) * r;
      dust[i * 3 + 2] = (i % 7 - 3) * .3;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dust, 3));
    const particles = new THREE.Points(dustGeo, new THREE.PointsMaterial({color: 0x70d9ff, size: .014, transparent: true, opacity: .5}));
    scene.add(particles);
    let frame = 0, visible = true, progress = 0, px = 0, py = 0;
    const resize = () => { const {width, height} = host.getBoundingClientRect(); if (!width || !height) return; renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); render(0); };
    const scroll = () => { progress = Math.min(1, Math.max(0, -host.getBoundingClientRect().top / host.offsetHeight)); };
    const pointer = (event) => { px = (event.clientX / innerWidth - .5) * .15; py = (event.clientY / innerHeight - .5) * .12; };
    function render(time) {
      const t = motion.matches ? 0 : time * .00015;
      group.rotation.z = t + (motion.matches ? 0 : progress * .65);
      group.rotation.x = motion.matches ? .1 : .1 + py + progress * .55;
      group.rotation.y = motion.matches ? 0 : px;
      group.scale.setScalar(1 + (motion.matches ? 0 : progress * .15));
      rings.forEach((ring, i) => { ring.rotation.z = Math.sin(t * 2 + i) * .025; });
      particles.rotation.z = -t * .3;
      renderer.render(scene, camera);
    }
    const animate = (time) => { frame = 0; render(time); if (visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(animate); };
    const sync = () => { cancelAnimationFrame(frame); frame = 0; if (visible && !document.hidden) { if (motion.matches) render(0); else frame = requestAnimationFrame(animate); } };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(host);
    const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host);
    addEventListener('scroll', scroll, {passive: true});
    host.closest('section').addEventListener('pointermove', pointer);
    document.addEventListener('visibilitychange', sync);
    motion.addEventListener('change', sync);
    const lost = (e) => { e.preventDefault(); cancelAnimationFrame(frame); canvas.style.opacity = '0'; };
    canvas.addEventListener('webglcontextlost', lost);
    resize();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect();
      removeEventListener('scroll', scroll); host.closest('section')?.removeEventListener('pointermove', pointer);
      document.removeEventListener('visibilitychange', sync); motion.removeEventListener('change', sync); canvas.removeEventListener('webglcontextlost', lost);
      scene.traverse(object => { object.geometry?.dispose(); object.material?.dispose(); });
      renderer.dispose();
    };
  }, []);
  return <canvas ref={canvasRef} className="energy-canvas" aria-hidden="true" />;
}
