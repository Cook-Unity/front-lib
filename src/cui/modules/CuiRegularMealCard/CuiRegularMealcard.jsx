import './CuiRegularMealcard.scss'
import CuiTag from '../../components/CuiTag/CuiTag'
import CuiMealFavorite from '../CuiMealCard/components/CuiMealFavorite/CuiMealFavorite'
import CuiMenuImage from '../CuiMealCard/components/CuiMenuImage/CuiMenuImage'
import CuiRegularMealCardTitle from './components/CuiRegularMealCardTitle'
import CuiMealActions from '../CuiMealCard/components/CuiMealActions/CuiMealActions'
import CuiMealSummary from '../CuiMealCard/components/CuiMealSummary/CuiMealSummary'
import classnames from 'classnames'



const CuiRegularMealCard = ({
    meal = {},
    mealDetailUrl,
    outOfStock,
    onMealClick,
    onChefClick,
    chef,
    mainTags = [],
    onLikeMeal,
    onUnlikeMeal,
    isLiked,
    onFavoriteClick,
    showGif,
    isMobile,
    showActions,
    priceText,
    quantity,
    onAddItem,
    onRemoveItem,
    isEditable,
    showFavoriteButtons,
    showSummary
}) => {

    const clickAndPreventDefault = (e, fn) => {
        e.stopPropagation && e.stopPropagation()
        e.preventDefault && e.preventDefault()
        fn()
    }

    return  <a
    href={mealDetailUrl}
    className={classnames('card-v2', { 'card-v2--sold-out': outOfStock })}
    onClick={e => clickAndPreventDefault(e, onMealClick)}>
    {/* <ChefAvatar
      image={chef.image}
      fallbackImage={chef.fallbackImage}
      onClick={e => clickAndPreventDefault(e, onChefClick)}
      name={`${chef.firstName || ''} ${chef.lastName || ''}`}
      className="card-v2__chef"
      size="medium"
    /> */}
    <div className="card-v2__img-wrapper">
      <div className="card-v2__tags-wrapper">
        {mainTags.map(tag => (
          <CuiTag
            color={tag.color}
            fill="solid"
            size="small"
            className={classnames('card-v2__tag', {
              'card-v2__tag-with-icon': !!tag.icon
            })}>
            {tag.icon}
            {tag.label}
          </CuiTag>
        ))}
      </div>
      {onLikeMeal && onUnlikeMeal && (
        <CuiMealFavorite
          checked={isLiked}
          onClick={e => clickAndPreventDefault(e, onFavoriteClick)}
          className={classnames('card-v2__favorite', {
            'card-v2__favorite--empty': !isLiked
          })}
        />
      )}
      <CuiMenuImage
        primary_image={
          showGif
            ? meal.gif || meal.imageUrl || meal.full_path_meal_image
            : meal.imageUrl || meal.full_path_meal_image
        }
        secondary_image={(meal.media && meal.media.secondaryImage) || null}
        className="card-v2__img"
      />
    </div>
    <div className="card-v2__details">
      <CuiRegularMealCardTitle
        title={meal.name}
        subtitle={meal.short_description}
        onClick={e => clickAndPreventDefault(e, onMealClick)}
        size={isMobile ? 'large' : 'medium'}
      />
      {/* {showCharacteristics && characteristics_l1.length > 0 && (
        <CharacteristicsL1
          list={characteristics_l1}
          mealId={meal.id}
          size="medium"
        />
      )}
      {showCharacteristics && characteristics_l2.length > 0 && (
        <CharacteristicsL2 list={characteristics_l2} size="medium" />
      )} */}
      {/* {showActions && hasRelatedMeal && (
        <div onClick={e => clickAndPreventDefault(e, () => {})}>
          <MealCardRelatedMeal
            meal={meal.relatedMeal}
            relatedMealChecked={relatedMealChecked}
            handleRelatedMealChange={handleRelatedMealChange}
            maxLength={42}
          />
        </div>
      )} */}
      {showActions && (
        <div className="card-v2__actions-container">
          <div onClick={e => clickAndPreventDefault(e, () => {})}>
            <CuiMealActions
              priceText={priceText}
              quantity={quantity}
              add={onAddItem}
              remove={onRemoveItem}
              isEditable={isEditable}
              meal={meal}
            />
          </div>
        </div>
      )}
      {outOfStock && <div className="card-v2__sold-out">SOLD OUT</div>}
      {showFavoriteButtons && onLikeMeal && onUnlikeMeal && (
        <div className="like_buttons">
          <CuiMealFavorite
            className="button-like"
            onClick={e => clickAndPreventDefault(e, onLikeMeal)}
          />
          <button
            className="button-like"
            onClick={e => clickAndPreventDefault(e, onUnlikeMeal)}>
            <img src={Dislike} alt="dislike" />
          </button>
        </div>
      )}
      {showSummary && <CuiMealSummary quantity={quantity} />}
    </div>
  </a>
}


export default CuiRegularMealCard
