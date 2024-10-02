const arrayRaw = (raw: any[], condition: any) => raw.slice(0, 3).filter(condition);
const arrayActiveRaw = (raw: any[], id: any) =>
  raw.map((x) => {
    x.active = x.id === id ? true : false;
    return x;
  });

export const chooseFilterById = (data: any[], id: number) => {
  return {
    dataMain: arrayRaw(data, (x: any, y: any) => y + 1 === id),
    dataExtra: arrayActiveRaw(data.slice(0, 3), id),
  };
};
