import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FieldProps } from 'formik';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export interface IOption {
  label: string
  value: any
}

interface IProps {
  onChange?: (event: any) => any
  label: string;
  name: string;
  value?: any;
  size?: "small" | "medium";
  options: IOption[];
  variant?: "standard" | "outlined" | "filled";
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      flexGrow: 1,
      height: '100%',
      padding: 20
    },

  })
);
const SelectInput = ({ name, size, options, variant, label, value, onChange }: IProps) => {
  const classes = useStyles();
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);
  return (
    <FormControl variant={variant} fullWidth size={size}>
      <InputLabel ref={inputLabel}>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        color='primary'
        size='small'
        inputProps={{
          classes: {
              icon: classes.icon,
          },
      }}
      >
        {options.map(it => <MenuItem value={it.value} key={it.value}>{it.label}</MenuItem>)}
      </Select>
    </FormControl>
  );
}
export default SelectInput;

