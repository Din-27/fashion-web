const arrayRaw = (raw: any[], condition: any) => raw.filter(condition);

export const chooseFilterById = (
  { data }: ProductDetailTypes.GalleryCard<any[]>,
  id: number
) => {
  return [
    ...arrayRaw(data, (x: any) => x.id === id),
    ...arrayRaw(data, (x: any) => x.id !== id),
  ];
};
