const baseUrl = 'https://api.apilayer.com/'
const exchangeUrl = 'exchangerates_data/'
const timeseriesUrl = 'timeseries?'

export const getExchangeUrl = (startDate, endDate, symbol, base) =>
  `${baseUrl}${exchangeUrl}${timeseriesUrl}start_date=${startDate}&end_date=${endDate}&symbols=${symbol}&base=${base}`

export const getSymbolsUrl = `${baseUrl}${exchangeUrl}symbols`
