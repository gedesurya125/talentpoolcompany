import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


interface Props {
  value:Date;
  onChange: (date:Date | null) => void;
  sx?:any
}
export default function BasicDatePicker({value, onChange, sx}: Props) {
  // const [value, setValue] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} sx={{
      ...sx
    }}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}