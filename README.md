# Frontend Library

> CookUnity React Library

[![pipeline status](https://gitlab.cookunity.com/cross/front-lib/badges/master/pipeline.svg)](https://gitlab.cookunity.com/cross/front-lib/-/commits/master)
[![coverage report](https://gitlab.cookunity.com/cross/front-lib/badges/master/coverage.svg)](https://gitlab.cookunity.com/cross/front-lib/-/commits/master)

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
