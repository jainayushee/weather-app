import React from 'react'
import { Card } from 'react-bootstrap'
import './Current.css'
export default function Current(props: any) {
  console.log(props);
  
  return (
    <Card className="custom-card-css row">
      <div className="details-left col-6">
        <div className="temp">13</div>
        <div className="loc">London, GB</div>
      </div>
      <div className="details-right col-6">
        <div className="time push-right">7:50 PM</div>
        <div className="day push-right">Sunset time, Monday</div>
      </div>
    </Card>
  )
}
