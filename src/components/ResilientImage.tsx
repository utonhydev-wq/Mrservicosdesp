import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  fallbackClassName?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'MR Serviços',
  fallbackSubtitle = 'Despachante Veicular',
  fallbackClassName = '',
  ...rest
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-neutral-900 text-neutral-300 border border-neutral-800 p-6 text-center ${fallbackClassName || className}`}
      >
        <ImageOff className="w-7 h-7 text-[#EAB308]" aria-hidden="true" />
        <span className="font-display font-semibold text-sm text-white">
          {fallbackTitle}
        </span>
        {fallbackSubtitle ? (
          <span className="text-xs text-neutral-400">{fallbackSubtitle}</span>
        ) : null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
}
