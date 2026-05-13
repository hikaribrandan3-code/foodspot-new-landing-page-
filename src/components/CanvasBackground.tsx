import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

export const CanvasBackground: React.FC<{ color?: string, variant?: 'dots' | 'blobs' }> = ({ color = '#ff3d00', variant = 'dots' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = variant === 'blobs' ? 6 : Math.floor((canvas.width * canvas.height) / 25000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: variant === 'blobs' ? Math.random() * 200 + 100 : Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * (variant === 'blobs' ? 0.2 : 0.5),
          speedY: (Math.random() - 0.5) * (variant === 'blobs' ? 0.2 : 0.5),
          color: color,
          opacity: variant === 'blobs' ? Math.random() * 0.2 + 0.05 : Math.random() * 0.5 + 0.1,
          phi: Math.random() * Math.PI * 2, // for blobs wobbling
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = canvas.height + p.size;
        if (p.y > canvas.height + p.size) p.y = -p.size;

        ctx.beginPath();
        if (variant === 'blobs') {
            const wobble = Math.sin(Date.now() * 0.001 + p.phi) * 10;
            ctx.arc(p.x + wobble, p.y + wobble, p.size, 0, Math.PI * 2);
            ctx.filter = 'blur(60px)';
        } else {
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.filter = 'none';
        }
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.filter = 'none';
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};
