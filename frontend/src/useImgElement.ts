import { useEffect, useState } from 'react';

export const useImgElement = (
  url: string,
  // onLoadCallback:(_img:HTMLImageElement)=>void = () => {},
) => {
  const [img] = useState<HTMLImageElement>(() => {
    const newImg = document.createElement('img');
    newImg.src = url;
    newImg.crossOrigin = 'Anonymous';
    return newImg;
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded = () => {
      setIsLoaded(true);
    };
  } else {
    img.onload = loaded;
  }
  }, [img]);

return { img, isLoaded };
};
