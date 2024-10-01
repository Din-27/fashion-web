import React from 'react';
import { SellingCard } from '../src/components';
import { data } from '../src/data/products';

export default function Page() {
  return (
    <>
      <SellingCard data={data} title={'NEW ARRIVALS'} buttonName={'View All'} />
    </>
  )
}
