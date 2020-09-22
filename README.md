# Frontend Library

> CookUnity React Library

<!--[![NPM](https://img.shields.io/npm/v/cu-front-lib.svg)](https://www.npmjs.com/package/cu-front-lib)-->
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
add "front-lib": "git+ssh://git@gitlab.cookunity.com:cross/front-lib.git#master",
to your package JSON
```
If you are creating a component you can link directly to your local folder:
```bash
add "front-lib": "file:../cross/front-lib",
to your package JSON
```

## Usage

```jsx
import React, { Component } from 'react'

import {MyComponent} from 'front-lib'
import 'front-lib/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [Luis Giribone](https://gitlab.cookunity.com)
