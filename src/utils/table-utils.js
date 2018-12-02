export const createTableConfig = (data) => {
    let tableRows = data.map(item => {
        let itemArray = item.split(','),
            dateData = parseFloat(itemArray[0]);
        return {
            open_value: parseFloat(itemArray[1]),
            high_value: parseFloat(itemArray[2]),
            low_value: parseFloat(itemArray[3]),
            close_value: parseFloat(itemArray[4]),
            timestamp: new Date(dateData).toLocaleString(),
        }
    });
    return {
        data: tableRows,
        originalData: data
    }
}