export function createChartConfig(data) {
    //OHLC basic config
    let commonPlotConfig = {
        type: "line",
    },
        plotDataForOpenPrice = {
            ...commonPlotConfig,
            dataPoints: [],
            toolTipContent: "Open price : {y}, on date : {date}",
        },
        plotDataForHighPrice = {
            ...commonPlotConfig,
            dataPoints: [],
            toolTipContent: "High price : {y}, on date : {date}",
        },
        plotDataForLowPrice = {
            ...commonPlotConfig,
            dataPoints: [],
            toolTipContent: "Low price : {y}, on date : {date}",
        }
        ,
        plotDataForClosePrice = {
            ...commonPlotConfig,
            dataPoints: [],
            toolTipContent: "Close price : {y}, on date : {date}",
        };
    //OHLC chart data point config
    data.forEach(item => {
        let itemArray = item.split(','),
            dateData = parseFloat(itemArray[0]);
        plotDataForOpenPrice.dataPoints.push(
            { x: dateData, y: parseFloat(itemArray[1]), date: new Date(dateData).toDateString() }
        );

        plotDataForHighPrice.dataPoints.push(
            { x: dateData, y: parseFloat(itemArray[2]), date: new Date(dateData).toDateString() }
        );

        plotDataForLowPrice.dataPoints.push(
            { x: dateData, y: parseFloat(itemArray[3]), date: new Date(dateData).toDateString() }
        );

        plotDataForClosePrice.dataPoints.push(
            { x: dateData, y: parseFloat(itemArray[4]), date: new Date(dateData).toDateString() }
        );
    });

    let combinedData = [
        plotDataForOpenPrice,
        plotDataForHighPrice,
        plotDataForLowPrice,
        plotDataForClosePrice
    ]

    return {
        animationEnabled: true,
        exportEnabled: true,
        zoomEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title: {
            text: "Prices by date"
        },
        axisY: {
            title: "Prices",
            includeZero: false,
            // suffix: "%"
        },
        axisX: {
            title: "date",
            // prefix: "t",
            // interval: 2
        },
        data: combinedData,
        originalData: data
    }
}