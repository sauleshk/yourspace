import React from 'react'

import styles from './Gift.module.scss'
import GiftItem from './GiftItem'

const Gift = () => {
  return (
    <div className={styles.gift}>
        <div className={styles.gift_top}>
        <h2>Find your diagnosis to talk to a psychologist about</h2>
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
            <h2>
We hope you have resolved your issue. We will always be happy to help!</h2>
        </div>
    </div>
  )
}

export default Gift