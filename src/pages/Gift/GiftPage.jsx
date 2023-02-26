import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "./GiftPage.scss"

const GiftPage = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState()
    const {id} = useParams()
    const getData = () => {
        axios.get(`https://63faf1492027a45d8d5d982e.mockapi.io/yourspace/${id}`)
        .then(res => {
          setData(res.data)
          setLoading(false)

        })
    }
    console.log(data);
    useEffect(() => {
        console.log(data);
        getData()
    },[])
  return (
    <div>
        <div>
            <div className='text'>
                <h2>{data?.title}</h2>
                <p>{data?.desc}</p>
            </div>
            <div className='backimage'>
                <img src={data?.image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default GiftPage