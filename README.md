# react-country-select-component

> A country select dropdown component with each country flag

[![NPM](https://img.shields.io/npm/v/react-country-select-component.svg)](https://www.npmjs.com/package/react-country-select-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-country-select-component
```

## Usage

```jsx
import React, { Component } from 'react'

import { ReactCountrySelectComponent } from 'react-country-select-component'

class Example extends Component {
  render() {
    return(
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
    )
  }
}
```

## License

MIT © [Mamun-swe](https://github.com/Mamun-swe)
