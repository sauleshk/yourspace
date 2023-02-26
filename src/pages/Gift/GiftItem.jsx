import React from 'react'

import styles from './Gift.module.scss'

const GiftItem = () => {
  return (
    <div className={styles.giftItem}>
        <div className={styles.giftItem_top}>
            <img src="https://emberint.ru/wp-content/uploads/2017/11/horoshij-psiholog-1.png" alt="" />
        </div>
        <div className={styles.giftItem_content}>
            <h3>title</h3>
            <span>500</span>
        </div>
        <div className={styles.giftItem_bottom}>
            <div className={styles.giftItem_userTools}>
                <button>buy</button>
                <button>basket</button>
            </div>
            <div className={styles.giftItem_seeAll}>
                <button>see All</button>
            </div>
        </div>
    </div>
  )
}

export default GiftItem