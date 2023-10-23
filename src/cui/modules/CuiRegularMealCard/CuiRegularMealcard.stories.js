import React from 'react'
import CuiRegularMealCard from './CuiRegularMealcard'

export default {
  title: 'Cui / Modules / CuiRegularMealCard',
  component: CuiRegularMealCard
}


const chef = {
    image: '/imgix',
    fallbackImage: '/fallbackImgix',
    firstName: 'Andres mendez',
    lastName: 'Spina'
}

const meal = {

    "id": 315,
    "batchId": 347962,
    "name": "Ginger-Lemongrass Braised Short Ribs",
    "shortDescription": "with Fluffy Whipped Yams",
    "image": "/media/catalog/product/cache/x1200/i/r/irvin-braised-short-ribs.jpeg",
    "imagePath": "",
    "price": 13.59,
    "finalPrice": 20.58,
    "premiumFee": 6.99,
    "premiumSpecial": "Chef Special",
    "sku": "NY-BRAISED-SHORT-RIBS",
    "source": null,
    "stock": 485,
    "isBackInTheMenu": false,
    "isMealRestaurantExclusive": false,
    "hasRecipe": false,
    "userRating": null,
    "warning": null,
    "warnings": {
      "message": null,
      "restrictions_applied": null,
      "allergens_not_matching": null,
      "diets_not_matching": null
    },
    "dietsMatching": [],
    "reviews": 855,
    "stars": 4.392,
    "qty": 1,
    "categoryId": 3,
    "category": "meat",
    "chef": {
      "id": 25742,
      "firstName": "Irvin",
      "lastName": "Paredez",
      "bannerPic": "/media/avatar/irvin20750.jpg",
      "profileImageUrl": null,
    },
    "meatType": "Beef",
    "meatCategory": null,
    "nutritionalFacts": {
      "calories": "940",
      "fat": "63",
      "carbs": "44",
      "sodium": "1290",
      "fiber": "7",
    },
    "specificationsDetails": [
      {
        "label": "High Fat",
      },
      {
        "label": "Nut Free",
      },
      {
        "label": "High Protein",
      }
    ],
    "sideDish": null,
    "feature": null,
    "weight": 1,
    "filter_by": [
      "beef",
      "meat",
      "high fat",
      "high protein",
      "nut free",
      "asian"
    ],
    "cuisines": [
      "asian"
    ],
    "sidesSubCategoryNames": [],
    "media": null,
    "categories": [
      {
        "label": "Meals",
        "id": 0,
      }
    ],
    "relatedMeal": null,
    "typesTags": [
      "Balanced Plate"
    ],
    "tags": [
      {
        "label": "High Fat",
      },
      {
        "label": "Nut Free",
      },
      {
        "label": "High Protein",
      }
    ],
    "inventories": null,
    "promotions": [],
    "all_tags": [
      {
        "type": "protein",
        "name": "Beef",
      },
      {
        "type": "protein",
        "name": "Short Rib",
      },
      {
        "type": "protein",
        "name": "Short Rib - Sliced",
      },
      {
        "type": "meal-composition",
        "name": "Composed Plate",
      },
      {
        "type": "meal-composition",
        "name": "Protein + Veg",
      },
      {
        "type": "season",
        "name": "Fall",
      },
      {
        "type": "diet",
        "name": "High Protein ",
      },
      {
        "type": "daypart",
        "name": "Dinner",
      },
      {
        "type": "cuisine",
        "name": "Vietnamese",
      },
      {
        "type": "cuisine",
        "name": "Asian",
      }
    ],
    "entity_id": 315,
    "magento_id": 315,
    "batch_id": 347962,
    "short_description": "with Fluffy Whipped Yams",
    "calories": 940,
    "image_path": "",
    "is_premium": true,
    "is_back_in_the_menu": false,
    "is_meal_restaurant_exclusive": false,
    "premium_fee": 6.99,
    "premium_special": "Chef Special",
    "category_id": 3,
    "chef_id": 25742,
    "chef_firstname": "Irvin",
    "chef_lastname": "Paredez",
    "nutritional_facts": {
      "calories": "940"
    },
    "bannerpic": "/media/avatar/irvin20750.jpg",
    "inStock": true,
    "meat_type": "Beef",
    "user_rating": null,
    "sidedish": null,
    "quantity": 0,
    "imageUrl": "https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x1200/i/r/irvin-braised-short-ribs.jpeg",
    "full_path_meal_image": "https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x1200/i/r/irvin-braised-short-ribs.jpeg",
    "full_path_chef_image": "https://d1ureao5dcqpo4.cloudfront.net/media/avatar/irvin20750.jpg",
    "protein_type": "Beef",
    "secondary_image": null,
    "gif": null,
    "specifications_detail": [
      null,
      null,
      null
    ],
    "sorting": {
      "DEFAULT": 515,
      "ALL": 1,
      "FOR_YOU": 1
    },
    "menu_category_id": 0,
    "menu_category_label": "Meals",
    "reservedStock": 0,
    "magentoId": 315  
}

const MenuCardWrapper = () => (
    <div
      style={{
        height: 500 + 'px',
        width: 300 + 'px',
      }}
    >
        <CuiRegularMealCard 
            meal={meal}
            mealDetailUrl={'/meals/123'}
            outOfStock={false}
            onMealClick={() => console.log('meal clicked')}
            onChefClick={() => console.log('chef clicked')}
            chef={chef}
            mainTags={[]}
            onLikeMeal={() => console.log('On like meal clicked')}
            onUnlikeMeal={() => console.log('on unliked meal clicked')}
            isLiked={false}
            onFavoriteClick={() => console.log('favorite clicked')}
            showGif={false}
            isMobile={false}
            showActions={true}
            priceText={`Add meal for $16`}
            quantity={0}
            onAddItem={() => console.log('Add item clicked')}
            onRemoveItem={() => console.log('Remove item clicked')}
            isEditable={true}
            showFavoriteButtons={false}
            showSummary={false}
        />
    </div>
  )
  


const Template = args => <MenuCardWrapper />
export const Default = Template.bind({})
