import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './Current.css'
export default function Current(props: any) {
  const [data, setData] = useState(props.data)
  let current = new Date();  
  let temperature = Math.round(data.main.temp - 273)

  useEffect(()=>{
    setData(props.data)
  })
  return (
    <Card className="custom-card-css row">
      <div className="details-left col-6">
        <div className="temp">{temperature}&deg;C</div>
        <div className="loc px-3">{data.name}, {data.sys.country}</div>
      </div>
      <div className="details-right col-6">
        <div className="time push-right">{current.getHours()}:{current.getMinutes()}</div>
        <div className="day push-right">{current.toDateString()}</div>
      </div>
    </Card>
  )
}
