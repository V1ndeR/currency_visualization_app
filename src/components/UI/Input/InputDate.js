import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'

const InputDate = ({ value, setValue, label }) => {

  return (
    <>
      <LocalizationProvider  dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label={label}
          inputFormat="yyyy-MM-dd"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) =>
            <TextField
              helperText={
                value === null ? 'Enter date' : value == 'Invalid Date' ?
                  'Invalid date' : !value ? 'Enter date' : null
              }
              {...params} sx={{
                width: 300,
                fieldset: { borderColor: 'orange' }
              }}
            />}
        />
      </LocalizationProvider>
    </>
  )
}

export default InputDate
