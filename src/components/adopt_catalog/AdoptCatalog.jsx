import React from 'react'
import styles from '@/components/adopt_catalog/adoptcatalog.module.css'
import AdoptCatalogCard from '../adopt_catalog_card/AdoptCatalogCard'

const AdoptCatalog = ({category}) => {
  const altValue = `${category} image`;

  function generateCardCatalogs(n) {
    let catalogs = [];
    for (let i = 0; i < n; i++) {
      catalogs.push(<AdoptCatalogCard imageURL="/assets/stock/image_placeholder.jpg" imageAlt={altValue} name="Pet Name" age="Pet Age" size="Pet Size" category={category}/>);
    }

    return catalogs;
  }

  return (
    
    <div className={styles.wrapper}>
      {/* Pet List/Catalog */}
      {
        generateCardCatalogs(10).map((card) => card)
      }
    </div>
  )
}

export default AdoptCatalog