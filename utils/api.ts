export const fetchImages = async (): Promise<any> => {
  const response = await fetch('https://unsplash.it/list');
  const images = await response.json();

  return images;
};

export const getImageFromId = (id: number): string =>
  `https://unsplash.it/${600}/${600}?image=${id}`;
