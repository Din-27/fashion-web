const arrayRaw = (raw: any[], condition: any) => raw.filter(condition);

export const chooseFilterById = ({ data }: ProductDetailTypes.GalleryCard<any[]>, id: number) => {
  return {
    dataMain: arrayRaw(data, (x: any) => x.id === id),
    dataExtra: arrayRaw(data, (x: any) => x.id !== id),
  };
};
