import { Autocomplete, TextField } from '@mui/material'

const InputSymbol = ({ inputValue, setInputValue, options }) => {
  return (
    <Autocomplete
      isOptionEqualToValue={(option, value) => option.id === value.id} value={inputValue}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue.toUpperCase())
      }}
      id="controllable-states"
      options={options}
      sx={{ width: 300, paddingTop: 10, borderColor: 'primary.main', '.MuiSvgIcon-root': {
        color: 'orange'
      } , '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'orange'
        } }
      }}
      renderInput={(params) => <TextField
        {...params} label="Select currency"
      />}
    />
  )
}

export default InputSymbol
