import React, {useState} from 'react'
import classnames from 'classnames'
import CuiBottomSheet from './CuiBottomSheet'
import './CuiBottomSheet.stories.scss'

export default {
  title: 'Cui / Components / CuiBottomSheet',
  component: CuiBottomSheet,
  argTypes: {
    src: {
      control: 'text'
    },
    title: {
      control: 'text'
    },
    withBackgroundImage: {
      control: 'boolean'
    }
  },
  args: {
    src: 'https://static.cookunity.com/cross/front-lib/images/cui-demo-banner-image.jpeg',
    title: 'Recommendations',
    withBackgroundImage: false
  }
}

const Template = ({withBackgroundImage, title, ...props}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button onClick={() => setIsOpen(prev => !prev)}>OPEN/CLOSE</button>
      <CuiBottomSheet
        {...props}
        isOpen={isOpen}
        className={classnames({'with-background-image': withBackgroundImage})}
      >
        <CuiBottomSheet.Header onRequestClose={() => setIsOpen(false)}>
          {title}
        </CuiBottomSheet.Header>
        <CuiBottomSheet.Body>
          <p>START</p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet, consectetur adipis lorem ipsum dolor sit amet, consectetur
            adipis lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet, consectetur adipis lorem ipsum dolor sit amet, consectetur
            adipis lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet, consectetur adipis lorem ipsum dolor sit amet, consectetur
            adipis lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet, consectetur adipis lorem ipsum dolor sit amet, consectetur
            adipis lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet, consectetur adipis lorem ipsum dolor sit amet, consectetur
            adipis lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet, consectetur adipis lorem ipsum dolor sit amet, consectetur
            adipis lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet, consectetur adipis lorem ipsum dolor sit amet, consectetur
            adipis lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet, consectetur adipis lorem ipsum dolor sit amet, consectetur
            adipis lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet, consectetur adipis lorem ipsum dolor sit amet, consectetur
            adipis lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
            amet, consectetur adipis lorem ipsum dolor sit amet, consectetur
            adipis lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <p>END</p>
        </CuiBottomSheet.Body>
      </CuiBottomSheet>
    </div>
  )
}

export const Default = Template.bind({})
