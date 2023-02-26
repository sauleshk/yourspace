import React from 'react'

import styles from './Gift.module.scss'
import GiftItem from './GiftItem'

const Gift = () => {
  return (
    <div className={styles.gift}>
        <div className={styles.gift_top}>
            Find your 
        </div>
        <div className={styles.gift_content}>
            <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem />
        </div>
        <div className={styles.gift_bottom}>
            bottom
        </div>
    </div>
  )
}

export default Gift