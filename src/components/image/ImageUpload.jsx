import { Image, buildSrc } from '@imagekit/react';
import { useState, useCallback } from "react";

const ImageUpload = ({src, alt, className}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const hidePlaceholder = () => setShowPlaceholder(false);

  const imgRef = useCallback((img) => {
    if (!img) return; // unmount

    if (img.complete) {
      hidePlaceholder();
      return;
    }
  }, []);

  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      ref={imgRef}
      style={showPlaceholder ? {
        backgroundImage: `url(${buildSrc({
          urlEndpoint: import.meta.env.VITE_IK_URL_ENDPOINT,
          src: src,
          transformation: [
            // {}, // Any other transformation you want to apply to the placeholder image
            {
              quality: 10,
            }
          ]
        })})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      } : {}}
      />
  )
}

export default ImageUpload