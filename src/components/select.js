import * as React from 'react'
import Select from 'react-select'
import { countries } from './data'

const customStyles = (radius) => {
  const myStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: 42,
      fontSize: 14,
      color: '#000',
      background: '#f3f4f6',
      boxShadow: 'none',
      '&:hover': { borderColor: '1px solid #f3f4f6' },
      border: state.isFocused ? '1px solid #f3f4f6' : '1px solid #f3f4f6',
      borderRadius: radius || 4
    })
  }
  return myStyles
}

const textStyle = {
  fontSize: '15px',
  marginTop: '0px',
  marginBottom: '5px'
}

// Country select
export const CountrySelect = ({
  name,
  isClearable,
  error,
  label,
  placeholder,
  borderRadius,
  defaultvalue,
  onChange
}) => {
  const handleSelect = (event) => onChange(event)

  return (
    <div>
      {error ? (
        <p style={textStyle}>{error}</p>
      ) : (
        <p style={textStyle}>{label}</p>
      )}

      <Select
        classNamePrefix='custom-select'
        name={name}
        placeholder={placeholder}
        styles={customStyles(borderRadius)}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null
        }}
        options={countries}
        onChange={handleSelect}
        isClearable={isClearable}
        defaultValue={defaultvalue ? { ...defaultvalue } : null}
      />
    </div>
  )
}
