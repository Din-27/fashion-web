declare namespace ProductDetailTypes {
  type SellingCard<T> = {
    data: T;
    title: string;
    buttonName: string;
    buttonClick: VoidFunction;
    buttonShow: boolean;
  };
  type GalleryCard<T> = {
    data: T;
  };
}
