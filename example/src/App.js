import React from 'react'

import { ReactCountrySelectComponent } from 'react-country-select-component'

const App = () => {
  return (
    <>
      <ReactCountrySelectComponent
        name={'country'}
        isClearable={true}
        error={false}
        label='Country'
        placeholder={'Select country'}
        borderRadius={6}
        defaultvalue={null}
        onChange={(event) => console.log(event)}
      />
    </>
  )
}

export default App
