const getDistinctDates = (data: any) => {
    let dateArray : any[] = []
    data.list.forEach((element: any) => {
        dateArray.push(element.dt_txt.substring(0, 10))
    });
    let distinctSet = Array.from(new Set(dateArray))
    return distinctSet
}

export default getDistinctDates

const getMeanTemperature = (data: any, labels: any) => {
}