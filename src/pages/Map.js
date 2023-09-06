/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef } from "react";
import * as Three from "three";

import globeUv from "../images/uv/globe.jpg";
import moonUv from "../images/uv/moon.jpg";

import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new Three.WebGLRenderer({
      antialias: true,
      canvas,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new Three.SphereGeometry(4, 50, 50);
    const moonGeometry = new Three.SphereGeometry(4, 50, 50);

    const material = new Three.MeshBasicMaterial({
      map: new Three.TextureLoader().load(globeUv),
    });

    const moonMaterial = new Three.MeshBasicMaterial({
      map: new Three.TextureLoader().load(moonUv),
    });

    const sphere = new Three.Mesh(geometry, material);
    const moon = new Three.Mesh(moonGeometry, moonMaterial);

    const startGeometry = new Three.BufferGeometry();
    const startMaterial = new Three.PointsMaterial({
      color: 0xffffff,
    });

    const startVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 3000;
      const y = (Math.random() - 0.5) * 3000;
      const z = -Math.random() * 2000;
      startVertices.push(x, y, z);
    }

    startGeometry.setAttribute(
      "position",
      new Three.Float32BufferAttribute(startVertices, 3)
    );

    const stars = new Three.Points(startGeometry, startMaterial);

    scene.add(sphere);
    scene.add(moon);
    scene.add(stars);

    // Update positions for responsive layout
    function updatePositions() {
      const aspectRatio = window.innerWidth / window.innerHeight;

      if (aspectRatio < 1) {
        // Vertical layout for small screens
        sphere.position.set(0, 5, 0);
        moon.position.set(0, -5, 0);
      } else {
        // Horizontal layout for larger screens
        sphere.position.set(-8, 0, 0);
        moon.position.set(8, 0, 0);
      }
    }

    updatePositions();
    window.addEventListener("resize", updatePositions);

    function onClick(event) {
      event.preventDefault();
      const mouse = new Three.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
      const raycaster = new Three.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const object = intersects[0].object;
        if (object === sphere) {
          navigate("/map/earth");
        } else if (object === moon) {
          navigate("/map/moon");
        }
      }
    }

    function onHoverStart(event) {
      event.target.style.cursor = "pointer";
    }

    function onHoverEnd(event) {
      event.target.style.cursor = "default";
    }

    canvas.addEventListener("mousemove", onHoverStart, false);
    canvas.addEventListener("mouseout", onHoverEnd, false);
    canvas.addEventListener("click", onClick, false);

    camera.position.z = 15;

    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.005;
      sphere.rotation.x += 0.005;
      moon.rotation.y += 0.005;
      moon.rotation.x += 0.005;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      // Cleanup event listener
      window.removeEventListener("resize", updatePositions);
      canvas.removeEventListener("mousemove", onHoverStart);
      canvas.removeEventListener("mouseout", onHoverEnd);
      canvas.removeEventListener("click", onClick);
    };
  }, [navigate]);

  return (
    <div className="map">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Map;
