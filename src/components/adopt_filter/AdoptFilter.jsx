import React, { useState} from 'react'
import styles from '@/components/adopt_filter/adoptfilter.module.css'

const AdoptFilter = ({ category }) => {
    const [filterState, setFilterState] = useState(false);

    const materialIcons = "material-icons-outlined"

    function toggleFilterState() {
        setFilterState((filterState) ? false : true);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.filter_icon} onClick={toggleFilterState}>
                <span className={materialIcons}>filter_alt</span>
                <span> Filter</span>
            </div>
            {filterState ?
                <div className={styles.form_wrapper}>
                    <div className={styles.close} onClick={toggleFilterState}>
                        <span className={materialIcons}>close</span>
                    </div>
                    <form action={`/adopt/${category}`} method="GET">
                        <div className={`${styles.filter_wrapper}`}>

                            { /* Age Filter */}
                            <p className={styles.filter_title}>Age</p>
                            <div className={styles.filter_category_container}>
                                <div className={styles.radio_container}>
                                    <label for="young">Young</label>
                                    <input id="young" type="radio" name='age' value="young" />
                                </div>
                                <div className={styles.radio_container}>
                                    <label for="adult">Adult</label>
                                    <input id="adult" type="radio" name='age' value="adult" />
                                </div>
                                <div className={styles.radio_container}>
                                    <label for="senior">Senior</label>
                                    <input id="senior" type="radio" name='age' value="senior" />
                                </div>
                            </div>

                            { /* Sex Filter */}
                            <p className={styles.filter_title}>Sex</p>
                            <div className={styles.filter_category_container}>
                                <div className={styles.radio_container}>
                                    <label for="male">Male</label>
                                    <input id="male" type="radio" name='sex' value="male" />
                                </div>
                                <div className={styles.radio_container}>
                                    <label for="female">Female</label>
                                    <input id="female" type="radio" name='sex' value="female" />
                                </div>
                            </div>

                            { /* Size Filter */}
                            <p className={styles.filter_title}>Size</p>
                            <div className={styles.filter_category_container}>
                                <div className={styles.radio_container}>
                                    <label for="small">Small</label>
                                    <input id="small" type="radio" name='size' value="small" />
                                </div>
                                <div className={styles.radio_container}>
                                    <label for="medium">Medium</label>
                                    <input id="medium" type="radio" name='size' value="medium" />
                                </div>
                                <div className={styles.radio_container}>
                                    <label for="large">Large</label>
                                    <input id="large" type="radio" name='size' value="large" />
                                </div>
                            </div>

                            { /* Sort Filter */}
                            <p className={styles.filter_title}>Sort</p>
                            <div className={styles.filter_category_container}>
                                <div className={styles.radio_container}>
                                    <label for="age">Age</label>
                                    <input id="age" type="radio" name='sort' value="age" />
                                </div>
                                <div className={styles.radio_container}>
                                    <label for="sex">Sex</label>
                                    <input id="sex" type="radio" name='sort' value="sex" />
                                </div>
                                <div className={styles.radio_container}>
                                    <label for="size">Size</label>
                                    <input id="size" type="radio" name='sort' value="size" />
                                </div>
                            </div>
                        </div>

                        { /* Apply Filter */}
                        <button type='submit' className={styles.apply_filter}>Apply Filter</button>
                    </form>
                </div>
                : <span></span>}

        </div>
    )
}

export default AdoptFilter