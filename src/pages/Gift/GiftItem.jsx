import React from 'react'

import styles from './Gift.module.scss'

const GiftItem = () => {
  return (
    <div className={styles.giftItem}>
        <div className={styles.giftItem_top}>
            <img src="https://phonoteka.org/uploads/posts/2021-03/thumbs/1616521202_53-p-fon-dlya-prezentatsii-psikhologiya-55.jpg" alt="" />
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