import { ButtonHTMLAttributes } from 'react';

declare namespace ProductDetailTypes {
  type SellingCard<T> = {
    data: T;
    title: string;
    buttonName: string;
    buttonClick: ButtonHTMLAttributes;
  };
  type GalleryCard<T> = {
    data: T;
  };
}
