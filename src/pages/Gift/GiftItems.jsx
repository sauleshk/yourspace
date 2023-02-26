import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './Gift.module.scss'

const GiftItem = ({item, id}) => {

  return (
    <div className={styles.giftItem} key={id}>
        <div className={styles.giftItem_top}>
            <img src={item.image} alt="" />
        </div>
        <div className={styles.giftItem_content}>
            <h3>{item.title}</h3>
            <span>{item.price}</span>
        </div>
        <div className={styles.giftItem_bottom}>
            <div className={styles.giftItem_userTools}>
                <button>buy</button>
                <button>basket</button>
            </div>
            <div className={styles.giftItem_seeAll}>
                <Link to={`/gifts/${id}`}>
                    <button>see All</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default GiftItem