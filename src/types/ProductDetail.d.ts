declare namespace ProductDetailTypes {
  type SellingCard<T> = {
    data: T;
    title: string;
    buttonName: string;
  };
  type GalleryCard<T> = {
    data: T;
  };
}
