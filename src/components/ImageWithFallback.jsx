// src/components/ImageWithFallback.jsx
import { useState } from 'react';
import { FiImage } from 'react-icons/fi'; // İkon olarak varsayılan görsel

const ImageWithFallback = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  if (error || !src) {
    // Resim yüklenemezse bu varsayılan kutu gösterilir
    return (
      <div className={`flex items-center justify-center bg-dark-card/50 dark:bg-dark-bg ${className}`}>
        <FiImage className="text-dark-text-secondary" size={40} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy" // Performans için resimleri tembel yükle
    />
  );
};

export default ImageWithFallback;