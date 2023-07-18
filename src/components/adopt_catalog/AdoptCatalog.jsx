"use client";

import React from 'react'
import styles from '@/components/adopt_catalog/adoptcatalog.module.css'
import AdoptCatalogCard from '../adopt_catalog_card/AdoptCatalogCard'
import { getPets } from '@/app/firebase/pets'
import { useEffect, useState } from 'react'


const AdoptCatalog = ({ category }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fun = async () => {
      setPets(await getPets(category));
    }
    fun();
  }, []);


  const altValue = `${category} image`;


  return (

    <div className={styles.wrapper}>
      {/* Pet List/Catalog */}
      {
        //generateCardCatalogs(10).map((card) => card)
        pets.map((d) => (
          <AdoptCatalogCard data={d} />
        ))
      }
    </div>
  )
}

export default AdoptCatalog