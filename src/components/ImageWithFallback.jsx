// src/components/ImageWithFallback.jsx
import { useState, useEffect, useRef } from 'react';
import { FiImage, FiLoader } from 'react-icons/fi'; // Yükleme ikonu için FiLoader ekledik

const ImageWithFallback = ({ src, alt, className, onLoad, onError }) => {
  const [status, setStatus] = useState('loading'); // 'loading', 'loaded', 'error' durumları
  const imgRef = useRef(null);

  // src prop'u her değiştiğinde durumu sıfırla
  useEffect(() => {
    // Eğer src yoksa, doğrudan hata durumuna geç
    if (!src) {
      setStatus('error');
      return;
    }

    // src değiştiğinde durumu tekrar 'loading' yap
    setStatus('loading');

    const image = imgRef.current;
    if (image && image.complete) {
      // Eğer resim zaten yüklenmişse (cache'den gelme durumu)
      // 'onLoad' olayı tetiklenmeyebilir, bu yüzden durumu manuel olarak ayarlıyoruz.
      setStatus('loaded');
      if (onLoad) {
        onLoad({ target: image });
      }
    }
  }, [src, onLoad]); // Bağımlılıklara src ve onLoad'ı ekliyoruz

  const handleError = (e) => {
    if (onError) {
      onError(e);
    }
    setStatus('error');
  };

  const handleLoad = (e) => {
    if (onLoad) {
      onLoad(e);
    }
    setStatus('loaded');
  };

  // 1. Hata durumu veya src yoksa Fallback göster
  if (status === 'error' || !src) {
    return (
      <div className={`flex items-center justify-center bg-card/50 ${className}`}>
        <FiImage className="text-secondary" size={40} />
      </div>
    );
  }

  // 2. Yükleme ve Yüklenmiş durumlarını yönet
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Yükleme sırasında gösterilecek yer tutucu (isteğe bağlı ama önerilir) */}
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/50">
          <FiLoader className="animate-spin text-primary" size={32} />
        </div>
      )}

      {/* Resim elementi */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        // Resim yüklendiğinde görünür yap, pürüzsüz geçiş için transition kullan
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithFallback;