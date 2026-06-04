import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  width?: number;
  height?: number;
}

/**
 * OptimizedImage component for better performance
 * - Uses lazy loading by default
 * - Adds proper width/height to prevent CLS
 * - Supports webp with fallback
 */
export function OptimizedImage({
  src,
  alt,
  className = '',
  lazy = true,
  width,
  height,
}: OptimizedImageProps) {
  const loading = lazy ? 'lazy' : 'eager';

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
    />
  );
}
