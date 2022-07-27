import { useState } from 'react'

import InputSymbol from '../UI/Input/InputSymbol'
import InputDate from '../UI/Input/InputDate'
import PlotGraph from '../UI/Graph/PlotGraph'
import { useGetSymbols } from '../../hooks/useGetSymbols'
import { useGetAll } from '../../hooks/useGetAll'
import { Loader } from '../UI/Loader/Loader'

function subtractYears(numOfYears, date = new Date()) {
  const dateCopy = new Date(date.getTime())

  dateCopy.setFullYear(dateCopy.getFullYear() - numOfYears)

  return dateCopy
}

function subtractMonths(numOfMonths, date = new Date()) {
  date.setMonth(date.getMonth() - numOfMonths)

  return date
}

function subtractDays(numOfDays, date = new Date()) {
  date.setDate(date.getDate() - numOfDays)

  return date
}

const ComparePrice = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputValuePair, setInputValuePair] = useState('')

  const [valueStartDate, setValueStartDate] = useState('')
  const [valueEndDate, setValueEndDate] = useState('')

  const options = {
    year: 'numeric', month: '2-digit', day: '2-digit'
  }

  const formDate = (date) => {
    return date !== null && new Date(date).toLocaleString('fr-CA', options).replace(/\//g, '-')
  }

  const startDate = formDate(valueStartDate)

  const endDate = formDate(valueEndDate)

  // console.log(subtractYears(1))

  const firstInputSymbols = []

  const lastInputSymbols = []

  const { loadingSymbols, symbols } = useGetSymbols()

  const { loadingDataPrice, dataPrice, isSuccess } = useGetAll(startDate, endDate, inputValuePair, inputValue)

  const allDate = []
  const symbolPrice = []

  if(isSuccess) {
    Object.entries(dataPrice).map(el => allDate.push(el[0]) && Object.entries(el[1]).map(el => symbolPrice.push(el[1])))
  }

  if(loadingDataPrice || loadingSymbols) {
    return (
      <div>
        <Loader/>
      </div>
    )
  }

  if(symbols){
    symbols.map(el => el !== inputValuePair && firstInputSymbols.push(el))
    symbols.map(el => el !== inputValue && lastInputSymbols.push(el))
  }

  const handleSubYear = () => {
    const subYear = subtractYears(1)
    setValueEndDate(formDate(new Date()))
    setValueStartDate(formDate(subYear))
  }

  const handleSubMonth = () => {
    const subMonth = subtractMonths(1)
    setValueEndDate(formDate(new Date()))
    setValueStartDate(formDate(subMonth))
  }

  const handleSub3Month = () => {
    const sub3Month = subtractMonths(3)
    setValueEndDate(formDate(new Date()))
    setValueStartDate(formDate(sub3Month))
  }

  const handleSub6Month = () => {
    const sub6Month = subtractMonths(6)
    setValueEndDate(formDate(new Date()))
    setValueStartDate(formDate(sub6Month))
  }

  const handleSub5Days = () => {
    const sub5Days = subtractDays(5)
    setValueEndDate(formDate(new Date()))
    setValueStartDate(formDate(sub5Days))
  }

  const handleSubOneDay = () => {
    const subOneDays = subtractDays(1)
    setValueEndDate(formDate(new Date()))
    setValueStartDate(formDate(subOneDays))
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <InputSymbol inputValue={inputValue} setInputValue={setInputValue} options={firstInputSymbols}/>
        <InputSymbol inputValue={inputValuePair} setInputValue={setInputValuePair} options={lastInputSymbols}/>
      </div>
      {
        inputValue.length === 3 && inputValuePair.length === 3 &&
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 40,
          alignItems: 'flex-start'
        }}>
          <InputDate value={valueStartDate} setValue={setValueStartDate} label={'Start date *'}/>
          <InputDate value={valueEndDate} setValue={setValueEndDate} label={'End date *'}/>
        </div>
      }
      {
        inputValue.length === 3 && inputValuePair.length === 3 &&
              startDate !== 'Invalid Date' && endDate !== 'Invalid Date' &&
              startDate && endDate ?
          <PlotGraph
            date={allDate}
            symbolPrice={symbolPrice}
            inputValue={inputValue}
            inputValuePair={inputValuePair}
            handleSubOneDay={handleSubOneDay}
            handleSub5Days={handleSub5Days}
            handleSubMonth={handleSubMonth}
            handleSub3Month={handleSub3Month}
            handleSub6Month={handleSub6Month}
            handleSubYear={handleSubYear}
          />
          : null
      }
    </>
  )
}

export default ComparePrice
