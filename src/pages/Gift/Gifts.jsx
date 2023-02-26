import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from './Gift.module.scss'
import GiftItem from './GiftItems'

const Gift = () => {
  const [pData, setPdata] = useState()
  const [loading,setLoading] = useState()
  const getData = () => {
    // fetch('https://63faf1492027a45d8d5d982e.mockapi.io/yourspace')
    // .then(resp => resp.json())
    // .then(data => setPdata(data))
    axios.get('https://63faf1492027a45d8d5d982e.mockapi.io/yourspace')
    .then(res =>{
      setPdata(res.data)
      setLoading(false)
    })

  }
  useEffect(() => {
    getData()
  },[])
  return (
    <div className={styles.gift}>
        <div className={styles.gift_top}>
        <h2>Find your diagnosis to talk to a psychologist about</h2>
        </div>
        <div className={styles.gift_content}>
          {pData?.map(item => (
            <GiftItem item={item} id={item.id} key={item.id} />
          ))}
            {/* <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem />
            <GiftItem /> */}
        </div>
        <div className={styles.gift_bottom}>
            <h2>
We hope you have resolved your issue. We will always be happy to help!</h2>
        </div>
    </div>
  )
}

export default Gift