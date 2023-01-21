import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { CChartLine } from '@coreui/react-chartjs'
import getDistinctDates from '../Utilities/utilities'

export default function Forecast(props: any) {
  const forecastData = props.data;

  const [labelValues, setLabelValue] = useState<string[]>();

  useEffect(() => {

    setLabelValue(getDistinctDates(forecastData))

  }, [forecastData])
  return (
    <>

      <Card className="d-flex justify-content-center align-items-center" style={{ height: "90%", width: "80%" }}>
        <CChartLine
          width={700}
          height={200}
          data={{
            labels: labelValues,
            datasets: [
              {
                label: "Temperature",
                backgroundColor: "rgba(220, 220, 220, 0.2)",
                borderColor: "#219ebc",
                pointBackgroundColor: "#000",
                pointBorderColor: "#fff",
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
              }
            ],
          }}
        />
      </Card>
    </>
  )
}
