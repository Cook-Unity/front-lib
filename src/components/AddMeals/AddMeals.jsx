import React from 'react'
import PropTypes from 'prop-types'
import { DateBox, DateBoxWrapper, DateTitle, Description, Photo, Status, Subtitle, Title, Wrapper, WrapperTitle, Header } from './styled'
import Button from '../../common/Buttons'
import {MEAL_STATUS, ORDER_STATUS} from './constants'

const AddMeals = ({mealName, mealPhoto, weeks, subtitle, description, addCallback, unskipAndAddCallback}) => {
  return <Wrapper>
    <Header>
      <Photo src={mealPhoto} />
      <WrapperTitle>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{mealName}</Title>
      </WrapperTitle>
    </Header>
    <Description>{description}</Description>
    <DateBoxWrapper>
      {weeks.map((week) => {
      const {date, orderStatus, mealStatus} = week

      return <DateBox status={mealStatus}>
        <DateTitle>{date}</DateTitle>
        {
          mealStatus === MEAL_STATUS.AVAILABLE
          && (orderStatus === ORDER_STATUS.SCHEDULED)
          && <Button onClick={() => addCallback(date)}>+ Add to order</Button>}
        {
         mealStatus === MEAL_STATUS.AVAILABLE
          && (orderStatus === ORDER_STATUS.SKIP)
          && <Button onClick={() => unskipAndAddCallback(date)}>Unskip & Add</Button>}
        {
          mealStatus === MEAL_STATUS.AVAILABLE
          && (orderStatus === ORDER_STATUS.CONFIRMED)
          && <Status status={mealStatus}>ORDER PROCESSED</Status>}
        {
          mealStatus === MEAL_STATUS.ADDED
          && (orderStatus === ORDER_STATUS.SCHEDULED)
          && <Status status={mealStatus}>ADDED</Status>}
        {
          mealStatus === MEAL_STATUS.NOT_AVAILABLE
          && (orderStatus === ORDER_STATUS.SCHEDULED || orderStatus === ORDER_STATUS.CONFIRMED || orderStatus === ORDER_STATUS.SKIP)
          && <Status status={mealStatus}>SOLD OUT</Status>}
      </DateBox>
    })}
    </DateBoxWrapper>
  </Wrapper>
}

AddMeals.defaultProps = {
  description: 'You can add this dish to any one of your upcoming orders, even if you skipped it.',
  subtitle: 'ADD TO ORDER:',
  addCallback: null,
  unskipAndAddCallback: null
}

AddMeals.propTypes = {
  mealName: PropTypes.string.isRequired,
  mealPhoto: PropTypes.string.isRequired,
  weeks: PropTypes.shape({
    date: PropTypes.string.isRequired,
    orderStatus: PropTypes.string.isRequired,
    mealStatus: PropTypes.string.isRequired,
  }),
  description: PropTypes.string,
  subtitle: PropTypes.string,
  addCallback: PropTypes.func,
  unskipAndAddCallback: PropTypes.func
}
export default AddMeals
