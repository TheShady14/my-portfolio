"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/components/theme-provider";

interface IconCloudProps {
  // Accept separate arrays for light and dark mode icons
  lightModeImages: string[];
  darkModeImages: string[];
  className?: string;
  imageSize?: number; // Controls the size of individual icons
  radius?: number; // Controls how spread out the icons are (larger = more spread)
  depth?: number;
  maxSpeed?: number;
  initialSpeed?: number; // Controls the auto-rotation speed
  dragSpeed?: number; // Controls rotation speed when dragging
  height?: number; // Controls the height of the container
}

export function IconCloud({
  lightModeImages,
  darkModeImages,
  className,
  imageSize = 60, // Adjust this to make individual icons larger or smaller
  radius = 300, // Adjust this to spread icons further apart or closer together
  depth = 10,
  maxSpeed = 0.05,
  initialSpeed = 0.01, // Increase for faster auto-rotation
  dragSpeed = 0.5,
  height = 500, // Controls the height of the container in pixels
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
  const spritesRef = useRef<THREE.Sprite[]>([]);
  const texturesRef = useRef<THREE.Texture[]>([]);

  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();

  // Determine which set of images to use based on theme
  const images = theme === "dark" ? darkModeImages : lightModeImages;

  // Effect to recreate the sphere when theme changes
  useEffect(() => {
    if (!loaded) return;

    // Clean up existing sprites
    if (sphereRef.current) {
      while (sphereRef.current.children.length > 0) {
        const object = sphereRef.current.children[0];
        sphereRef.current.remove(object);
      }
      spritesRef.current = [];
    }

    // Dispose existing textures
    texturesRef.current.forEach((texture) => {
      texture.dispose();
    });
    texturesRef.current = [];

    // Reload with new theme
    if (containerRef.current && sphereRef.current) {
      loadSprites(images, sphereRef.current);
    }
  }, [theme, loaded, images]);

  // Function to load sprites
  const loadSprites = (imageUrls: string[], sphere: THREE.Group) => {
    const textureLoader = new THREE.TextureLoader();
    let loadedCount = 0;
    const totalImages = imageUrls.length;
    const textures: THREE.Texture[] = [];
    const sprites: THREE.Sprite[] = [];

    // Create a default texture for fallback
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 64, 64);
      ctx.fillStyle = "#000000";
      ctx.font = "48px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("?", 32, 32);
    }
    const fallbackTexture = new THREE.CanvasTexture(canvas);

    // Function to create a sprite
    const createSprite = (index: number, texture: THREE.Texture) => {
      const material = new THREE.SpriteMaterial({
        map: texture,
      });
      const sprite = new THREE.Sprite(material);

      // Calculate position on sphere
      const phi = Math.acos(-1 + (2 * index) / totalImages);
      const theta = Math.sqrt(totalImages * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      sprite.position.set(x, y, z);
      sprite.scale.set(imageSize, imageSize, 1);

      sphere.add(sprite);
      sprites.push(sprite);
    };

    imageUrls.forEach((url, index) => {
      // Check if the URL is valid
      if (!url) {
        console.warn(`Invalid URL at index ${index}`);
        createSprite(index, fallbackTexture);
        loadedCount++;
        if (loadedCount === totalImages) {
          texturesRef.current = textures;
          spritesRef.current = sprites;
        }
        return;
      }

      textureLoader.load(
        url,
        (texture) => {
          textures.push(texture);
          createSprite(index, texture);

          loadedCount++;
          if (loadedCount === totalImages) {
            texturesRef.current = textures;
            spritesRef.current = sprites;
          }
        },
        undefined,
        (error) => {
          console.error(`Error loading texture for ${url}:`, error);
          // Use fallback texture instead
          createSprite(index, fallbackTexture);

          loadedCount++;
          if (loadedCount === totalImages) {
            texturesRef.current = textures;
            spritesRef.current = sprites;
          }
        }
      );
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera - Adjust position to be less zoomed in
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.z = 800; // Increase this value to zoom out more
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

    // Load initial sprites
    loadSprites(images, sphere);
    setLoaded(true);

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

      // Dispose textures
      texturesRef.current.forEach((texture) => {
        texture.dispose();
      });
    };
  }, [imageSize, radius, depth, maxSpeed, initialSpeed, dragSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        `h-[${height}px] w-full cursor-grab active:cursor-grabbing`,
        className
      )}
      style={{ height: `${height}px` }} // Explicit height setting
    />
  );
}
