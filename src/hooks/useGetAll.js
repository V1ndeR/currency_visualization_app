import { useQuery } from 'react-query'
import axios from 'axios'

import { getExchangeUrl } from '../url'

export const useGetAll = (startDate, endDate, symbol, base) => {

  const {
    isLoading: loadingDataPrice,
    data: dataPrice,
    isSuccess
  } = useQuery(['dataPrice', startDate, endDate, symbol, base], async () => {

    const { data } = await axios.get(getExchangeUrl(startDate, endDate, symbol, base), {
      headers: { 'apikey': '3ohsbZgIUYxAetZWTSpSeQyY8HAnmVEi' }
    }).then(res => res)
    const { rates } = data

    return rates

  }, {
    staleTime: 300000,
    enabled: symbol.length === 3 && base.length === 3 &&
                 startDate !== 'Invalid Date' && endDate !== 'Invalid Date' &&
                 !!startDate && !!endDate
  })

  return { loadingDataPrice, dataPrice, isSuccess }
}
