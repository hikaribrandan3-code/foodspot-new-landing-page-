export const CanvasBackground = ({ color = '#ff3d00', variant = 'dots' }: { color?: string, variant?: 'dots' | 'blobs' }) => {
  const bgColor = variant === 'blobs'
    ? `linear-gradient(135deg, ${color}11 0%, ${color}05 100%)`
    : color;

  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{
        background: bgColor,
        mixBlendMode: 'multiply',
      }}
    />
  );
};
