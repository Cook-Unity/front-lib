import React from 'react'
import CuiCardContent from '../../components/CuiCardContent/CuiCardContent'
import CuiFabButton from '../../components/CuiFabButton/CuiFabButton'
import CuiIcon from '../../components/CuiIcon/CuiIcon'
import CuiAvatar from '../../components/CuiAvatar/CuiAvatar'
import CuiImage from '../../components/CuiImage/CuiImage'
import CuiTag from '../../components/CuiTag/CuiTag'
import CuiMealCard from './CuiMealCard'
import CuiMealBadge from './components/CuiMealBadge/CuiMealBadge'
import CuiItem from '../../components/CuiItem/CuiItem'
import CuiMealImage from './components/CuiMealImage/CuiMealImage'
import CuiMealPrice from './components/CuiMealPrice/CuiMealPrice'
import CuiMealDescription from './components/CuiMealDescription/CuiMealDescription'

export default {
  title: 'Cui / Modules / CuiMealCard',
  component: CuiMealCard,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['dark', 'light']
      },
      defaultValue: 'dark'
    },
    fabPosition: {
      control: {
        type: 'select',
        options: ['none', 'bottom', 'top']
      },
      defaultValue: 'none'
    },
    direction: {
      control: {
        type: 'select',
        options: ['column', 'row']
      },
      defaultValue: 'column'
    },
    price: {
      control: {
        type: 'text'
      }
    },
    tagLabel: {
      control: {
        type: 'text'
      }
    }
  }
}

const fabPositions = {
  none: null,
  bottom: {
    bottom: 16,
    right: 16
  },
  top: {
    top: 16,
    right: 16
  }
}

const meal = {
  chefImage:
    'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg',
  chefName: 'Akhtar Nawab',
  mealImage:
    'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg',
  mealDescription: '<b>Braised Pork</b> with Butternut Squash and...',
  stars: 4.8,
  reviews: 351,
  calories: 684
}

const Template = args => (
  <CuiMealCard {...args}>
    {args.fabPosition !== 'none' && (
      <CuiFabButton fixed color="dark" {...fabPositions[args.fabPosition]}>
        <CuiIcon name="plus" />
      </CuiFabButton>
    )}

    <CuiMealImage>
      {args.tagLabel && <CuiMealBadge>{args.tagLabel}</CuiMealBadge>}
      <CuiImage src={meal.mealImage} title="image" />
    </CuiMealImage>

    <CuiCardContent>
      <CuiItem>
        {meal.chefImage && (
          <CuiAvatar
            border="rounded"
            src={meal.chefImage}
            title={meal.chefName}
          />
        )}
        <p>{meal.chefName}</p>
      </CuiItem>

      <CuiMealDescription
        dangerouslySetInnerHTML={{__html: meal.mealDescription}}
      />

      {args.price && <CuiMealPrice>{args.price}</CuiMealPrice>}
    </CuiCardContent>
  </CuiMealCard>
)

export const Default = Template.bind({})
Default.args = {}

const MealTags = () => (
  <div className="cui-meal-card-tags">
    <CuiTag color="white" fill="solid" size="small" type="tag">
      <CuiIcon name="starFull" />
      {meal.stars} <span className="reviews">({meal.reviews})</span>
    </CuiTag>
    <CuiTag
      className="calories"
      color="white"
      fill="solid"
      size="small"
      type="tag"
    >
      {meal.calories} cal
    </CuiTag>

    <CuiTag color="white" fill="solid" size="small" type="tag">
      <CuiIcon name="vegetarian" />
    </CuiTag>
  </div>
)

const TemplateCol = args => (
  <CuiMealCard {...args}>
    {args.fabPosition !== 'none' && (
      <CuiFabButton fixed color="dark" {...fabPositions[args.fabPosition]}>
        <CuiIcon name="plus" />
      </CuiFabButton>
    )}

    <CuiMealImage>
      {args.tagLabel && <CuiMealBadge>{args.tagLabel}</CuiMealBadge>}
      <MealTags />
      <CuiImage src={meal.mealImage} title="image" />
    </CuiMealImage>

    <CuiCardContent>
      <CuiItem>
        {meal.chefImage && (
          <CuiAvatar
            border="rounded"
            src={meal.chefImage}
            title={meal.chefName}
          />
        )}
        <p>{meal.chefName}</p>
      </CuiItem>

      <CuiMealDescription
        dangerouslySetInnerHTML={{__html: meal.mealDescription}}
      />

      {args.price && <CuiMealPrice>{args.price}</CuiMealPrice>}
    </CuiCardContent>
  </CuiMealCard>
)

export const DefaultCol = TemplateCol.bind({})
DefaultCol.args = {
  fabPosition: 'top'
}

const TemplateRow = args => (
  <CuiMealCard {...args}>
    {args.fabPosition !== 'none' && (
      <CuiFabButton fixed color="dark" {...fabPositions[args.fabPosition]}>
        <CuiIcon name="plus" />
      </CuiFabButton>
    )}

    <CuiMealImage>
      {args.tagLabel && <CuiMealBadge>{args.tagLabel}</CuiMealBadge>}
      <CuiImage src={meal.mealImage} title="image" />
    </CuiMealImage>

    <CuiCardContent>
      <MealTags />
      <CuiItem>
        {meal.chefImage && (
          <CuiAvatar
            border="rounded"
            src={meal.chefImage}
            title={meal.chefName}
          />
        )}
        <p>{meal.chefName}</p>
      </CuiItem>

      <CuiMealDescription
        dangerouslySetInnerHTML={{__html: meal.mealDescription}}
      />

      {args.price && <CuiMealPrice>{args.price}</CuiMealPrice>}
    </CuiCardContent>
  </CuiMealCard>
)

export const DefaultRow = TemplateRow.bind({})
DefaultRow.args = {
  direction: 'row',
  fabPosition: 'bottom'
}
