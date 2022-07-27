import { useQuery } from 'react-query'
import axios from 'axios'

import { getSymbolsUrl } from '../url'

export const useGetSymbols = () => {
  const { isLoading: loadingSymbols, data: symbols } = useQuery('symbols', async () => {
    const { data } = await axios.get(getSymbolsUrl, {
      headers: { 'apikey': '3ohsbZgIUYxAetZWTSpSeQyY8HAnmVEi' }
    })

    return Object.entries(data.symbols).map(el => el[0])
  })

  return { loadingSymbols, symbols }
}
