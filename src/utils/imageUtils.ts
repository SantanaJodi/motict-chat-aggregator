export interface ImageProps {
  orientation: "landscape" | "potrait" | "square";
  width: number;
  height: number;
}

const init: ImageProps = {
  orientation: "landscape",
  height: 0,
  width: 0,
};

export const getImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      if (width > height) {
        resolve({ orientation: "landscape", width: 280, height: 200 });
      } else if (width < height) {
        resolve({ orientation: "potrait", width: 200, height: 280 });
      } else {
        resolve({ orientation: "square", width: 280, height: 280 });
      }
    };
    img.src = src;
  });
};
