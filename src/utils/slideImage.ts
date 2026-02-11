const slide2ImageModules = import.meta.glob('../assets/images/2/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const slide2ImageMap = Object.entries(slide2ImageModules).reduce<Record<string, string>>(
  (acc, [path, url]) => {
    const fileName = path.split('/').pop();
    if (fileName) {
      const baseName = fileName.replace(/\.png$/i, '');
      acc[baseName] = url;
    }

    return acc;
  },
  {},
);

export const getSlide2ImageSrc = (imageName?: string): string => {
  if (!imageName) {
    return '';
  }

  return slide2ImageMap[imageName] ?? '';
};
