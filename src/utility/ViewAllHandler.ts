import { useState } from 'react';
import useMediaQuery from './sizeMedia/mediaQuery';

export const HandleViewAllPage = (data: any[]) => {
  const [viewAll, setViewAll] = useState(false);
  const isMobileView = useMediaQuery('(max-width: 768px)');
  const product = isMobileView ? data : viewAll ? data : data.slice(0, 4);
  const buttonName = !viewAll ? 'View All' : 'Less Product';
  const onClickViewAll = () => setViewAll((prev) => (!prev));
  return { product, buttonName, onClickViewAll };
};
