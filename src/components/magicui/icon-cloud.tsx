"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface IconCloudProps {
  images: string[];
  className?: string;
  imageSize?: number;
  radius?: number;
  depth?: number;
  maxSpeed?: number;
  initialSpeed?: number;
  dragSpeed?: number;
}

export function IconCloud({
  images,
  className,
  imageSize = 60,
  radius = 300,
  depth = 10,
  maxSpeed = 0.05,
  initialSpeed = 0.01,
  dragSpeed = 0.5,
}: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sphereRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const speedRef = useRef<number>(initialSpeed);
  const activeRef = useRef<boolean>(false);
  const frameIdRef = useRef<number | null>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 400;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Sphere
    const sphere = new THREE.Group();
    sphereRef.current = sphere;
    scene.add(sphere);

    // Load textures and create sprites
    const textureLoader = new THREE.TextureLoader();
    let loadedCount = 0;

    images.forEach((url, index) => {
      textureLoader.load(
        url,
        (texture) => {
          const material = new THREE.SpriteMaterial({
            map: texture,
            color: 0xffffff,
          });
          const sprite = new THREE.Sprite(material);

          // Calculate position on sphere
          const phi = Math.acos(-1 + (2 * index) / images.length);
          const theta = Math.sqrt(images.length * Math.PI) * phi;

          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);

          sprite.position.set(x, y, z);
          sprite.scale.set(imageSize, imageSize, 1);

          sphere.add(sprite);

          loadedCount++;
          if (loadedCount === images.length) {
            setLoaded(true);
          }
        },
        undefined,
        (error) => {
          console.error("Error loading texture", error);
          loadedCount++;
          if (loadedCount === images.length) {
            setLoaded(true);
          }
        }
      );
    });

    // Mouse events
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: ((event.clientX - rect.left) / width) * 2 - 1,
        y: -((event.clientY - rect.top) / height) * 2 + 1,
      };
    };

    const handleMouseDown = () => {
      activeRef.current = true;
      speedRef.current = dragSpeed;
    };

    const handleMouseUp = () => {
      activeRef.current = false;
      speedRef.current = initialSpeed;
    };

    const handleMouseLeave = () => {
      activeRef.current = false;
      speedRef.current = initialSpeed;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Animation
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (sphereRef.current) {
        if (activeRef.current) {
          // Rotate based on mouse position when dragging
          sphereRef.current.rotation.y += mouseRef.current.x * speedRef.current;
          sphereRef.current.rotation.x += mouseRef.current.y * speedRef.current;
        } else {
          // Auto-rotate when not dragging
          sphereRef.current.rotation.y += speedRef.current;

          // Gradually slow down to initial speed
          if (speedRef.current > initialSpeed) {
            speedRef.current -= 0.001;
            if (speedRef.current < initialSpeed)
              speedRef.current = initialSpeed;
          }
        }
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current)
        return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }

      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);

      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [images, imageSize, radius, depth, maxSpeed, initialSpeed, dragSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-[400px] w-full cursor-grab active:cursor-grabbing",
        className
      )}
    />
  );
}
