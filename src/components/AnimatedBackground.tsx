import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/components/theme-provider';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Stars configuration
    const starCount = 200;
    const stars: Star[] = [];
    
    // Shooting stars configuration
    const shootingStars: ShootingStar[] = [];
    const shootingStarInterval = 2000; // ms
    let lastShootingStarTime = 0;

    canvas.width = width;
    canvas.height = height;

    const getStarColor = (opacity: number) => {
      // Check if the current theme is light (by checking class on document element or using theme prop)
      // Since we have the theme prop from hook, we can use it.
      // However, the hook state might not update inside the animation loop closure if not careful.
      // But we are inside useEffect which depends on [theme]. So it will re-init on theme change.
      
      const isLight = document.documentElement.classList.contains('light');
      if (isLight) {
        return `rgba(0, 0, 0, ${opacity * 0.5})`; // Dark stars for light mode
      }
      return `rgba(255, 255, 255, ${opacity})`; // White stars for dark mode
    };

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2;
        this.opacity = Math.random();
        this.speed = Math.random() * 0.05;
      }

      update() {
        this.opacity += (Math.random() - 0.5) * 0.05;
        if (this.opacity < 0) this.opacity = 0;
        if (this.opacity > 1) this.opacity = 1;
        
        this.y -= this.speed;
        if (this.y < 0) this.y = height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = getStarColor(this.opacity);
        ctx.fill();
      }
    }

    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height * 0.5; // Start in top half
        this.length = Math.random() * 80 + 20;
        this.speed = Math.random() * 10 + 5;
        this.angle = Math.PI / 4; // 45 degrees
        this.opacity = 1;
      }

      update() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.opacity -= 0.02;
      }

      draw() {
        if (!ctx || this.opacity <= 0) return;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length * Math.cos(this.angle), this.y - this.length * Math.sin(this.angle));
        ctx.strokeStyle = getStarColor(this.opacity);
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    const init = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      // Draw stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      // Handle shooting stars
      if (timestamp - lastShootingStarTime > shootingStarInterval) {
        if (Math.random() > 0.5) {
          shootingStars.push(new ShootingStar());
        }
        lastShootingStarTime = timestamp;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        shootingStars[i].update();
        shootingStars[i].draw();
        if (shootingStars[i].opacity <= 0) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-run effect when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default AnimatedBackground;
