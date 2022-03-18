import * as React from 'react'
import { CountrySelect } from './components/select'

export const ReactCountrySelectComponent = ({
  name,
  isClearable,
  error,
  label,
  placeholder,
  borderRadius,
  defaultvalue,
  onChange
}) => {
  return (
    <CountrySelect
      name={name}
      isClearable={isClearable}
      error={error}
      label={label}
      placeholder={placeholder}
      borderRadius={borderRadius}
      defaultvalue={defaultvalue}
      onChange={onChange}
    />
  )
}
