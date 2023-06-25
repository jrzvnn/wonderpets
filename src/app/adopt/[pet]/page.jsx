"use client"

import AdoptCatalog from '@/components/adopt_catalog/AdoptCatalog';
import AdoptFilter from '@/components/adopt_filter/AdoptFilter';
import AdoptHeader from '@/components/adopt_header/AdoptHeader';
import {usePathname} from 'next/navigation'
import React from 'react'

const Adopt = () => {
  function getCategory() {
    {/* get last segment of URL */}
    const category = usePathname().split("/").pop().toLowerCase();
    let headerTitle = '';
    let imageURL = '';
    let imageAlt = ''

    switch (category) {
      case 'dog': 
        headerTitle = 'Woof!';
        imageURL = '/assets/stock/adopt_dog.png';
        imageAlt = 'dog image';
        break;
      case 'cat':
        headerTitle = 'Meow!';
        imageURL = '/assets/stock/adopt_cat.png';
        imageAlt = 'cat image';
        break; 
      case 'fish':
        headerTitle = 'Glub!';
        imageURL = '/assets/stock/adopt_fish.png';
        imageAlt = 'fish image';
        break;
      case 'bird':
        headerTitle = 'Tweet!';
        imageURL = '/assets/stock/adopt_bird.png';
        imageAlt = 'bird image';
        break;
      case 'cutie':
        headerTitle = 'Squeak!';
        imageURL = '/assets/stock/adopt_cutie.png';
        imageAlt = 'guinea pig image';
        break;
      default:
        headerTitle = 'Hi!';
        imageURL = '/assets/stock/adopt_dog.png';
        imageAlt = 'dog image';
    }

    headerTitle += ' Will you give me a new home?';

    return {'category': category, 'headerTitle': headerTitle, 'imageURL': imageURL, 'imageAlt': imageAlt}; 
  }

  const category = getCategory();

  return (
    <div>
      {/* Adopt Header */}
      <AdoptHeader headerTitle={category.headerTitle} imageURL={category.imageURL} imageAlt={category.imageAlt}/>

      {/* Age, Sex, Size, Sort by Filter */}
      <AdoptFilter category={category.category}/> 

      {/* Adopt Catalog */}
      <AdoptCatalog category={category.category}/>
    </div>
  )
}

export default Adopt