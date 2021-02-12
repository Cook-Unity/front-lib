# Frontend Library

> CookUnity React Library

[![pipeline status](https://gitlab.cookunity.com/cross/front-lib/badges/master/pipeline.svg)](https://gitlab.cookunity.com/cross/front-lib/-/commits/master)
[![coverage report](https://gitlab.cookunity.com/cross/front-lib/badges/master/coverage.svg)](https://gitlab.cookunity.com/cross/front-lib/-/commits/master)

## Create new release (tag)

After merging your feature branch into master run the following (in master):

```bash
npm version [TAG] -m "New feature description"
```

For example:
```bash
npm version 0.3.0 -m "New meal card"
```

This will create a new commit with your comment and the tag "v0.3.0" pointing to it.
Then push the changes (including the new tag):

```bash
git push origin master v0.3.0
```

## Install in your project

```bash
npm install git+https://gitlab-CI-read:zBNenyUg64tnXWRiJxy1@gitlab.cookunity.com/cross/front-lib.git#[TAG]
```
*Update the [TAG] placeholder with the tag (v0.3.0) previously created in the library repository.*

Updating the library version using it with git like we do can be tricky. Always verify that the package-lock file gets updated with the corresponding new library version. For the moment you can first do "npm remove front-lib", then restore the library in the package.json file, and then finally run "npm install". If the package-lock file does not get updated with the new version then it won't be install when deploying.

## Usage

```jsx
...

import { MyComponent } from 'front-lib'
import 'front-lib/dist/index.css'

const Comp = ()= {
  ...
  return <MyLibComponent />
}
```

## Development

### Storybook

You can develop your component running [Storybook](https://storybook.js.org/).

Run storybook:

```bash
npm run storybook
```

### Integrate locally

When you want to test the integration of the new component with your project you can also run everything locally:

Run the following in the root of the library:

```bash
npm link
```

Then run the following command into the root of the project you want to test the library with:

```bash
npm link front-lib
```
*Here we are supposing the library's local repository is in a folder called "front-lib"*

We need to run the following in the library root's folder (let's suppose both  the library and the project are at the same level and that the project's folder is called "my-project").

```bash
npm link ../my-project/node_modules/react
```
*This is a workaround until we find a better solution. More info [here](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react)*

Finally run the library locally:
```bash
npm start
```

Now you can run your project in development mode and changes into the library should be automatically visible.

## Tests

You have basically there commands available within the npm commands list:

Simple:
```bash
npm run test
```

Watch (for writing the tests):
```bash
npm run test:watch
```

With code coverage:
```bash
npm run test:coverage
```

Then you can combine jest options with each of the commands, for example:

With code coverage generation:
```bash
npm run test -- --coverage
```

Verbose
```bash
npm run test -- --verbose
```

Watch verbose
```bash
npm run test:watch -- --verbose
```

**Coverage**

Besides getting code coverage on the screen you get an html page with much more detail. Open the following file with your browser after running the tests with the coverage option:

`
./coverage/lcov-report/index.html
`

## Pipelines

Whenever a MR is created the library's pipeline runs the following two jobs:

- Linter
- Unit tests

When the pipeline fails, you can retry any failed jobs, or push new commits to fix the failure. Only after the pipeline runs successfully the MR becomes mergeable.


## License

MIT © [Luis Giribone](https://gitlab.cookunity.com)
