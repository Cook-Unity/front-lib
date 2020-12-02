import React from 'react'
import {storiesOf} from '@storybook/react'
import Button from './index'

storiesOf('Button', module)
  .add('light', () => <Button>Button Label</Button>)
  .add('dark', () => <Button dark>Button Label</Button>)
  .add('disabled', () => <Button disabled>Button Label</Button>)
  .add('small', () => <Button small>Button Label</Button>)
  .add('large', () => <Button large>Button Label</Button>)
  .add('green', () => <Button green>Button Label</Button>)
