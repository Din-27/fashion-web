
declare namespace ProductDetailTypes {
  type SellingCard<T> = {
    data: T;
    title: string;
    buttonName: string;
    buttonClick: VoidFunction;
  };
  type GalleryCard<T> = {
    data: T;
  };
}
