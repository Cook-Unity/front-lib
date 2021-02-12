export const revs = [
  {
    created_at: '2020-10-16 03:53:04',
    customer_id: '73211',
    customer_name: 'Daniel',
    detail:
      'Loved the taste, nice filling portion and perfect balance of meat and veggies.',
    detail_id: 69525,
    entity_id: 1,
    entity_pk_value: 3169,
    product_name: 'Asian Meatballs with Napa Cabbage',
    product_image:
      'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/a/s/asian-meatballs-james.jpeg',
    nickname: 'Daniel Dorga',
    rating: '100.0000',
    review_id: 70662,
    reviews: '81',
    stars: '3.40000000',
    status_id: 1,
    title: 'Loved the taste, nice filling...'
  },
  {
    created_at: '2020-10-05 23:54:25',
    customer_id: '76271',
    customer_name: 'Victor',
    detail: 'Deliciously made!!!',
    detail_id: 67660,
    entity_id: 1,
    entity_pk_value: 3169,
    product_name: 'Baked Ziti with Broccoli Rabe',
    product_image:
      'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/b/a/baked_ziti_3078.jpeg',
    rating: '100.0000',
    review_id: 68797,
    reviews: '81',
    stars: '5.00000000',
    status_id: 1,
    title: 'Deliciously made!!!'
  },
  {
    created_at: '2020-10-05 23:54:25',
    customer_id: '76271',
    customer_name: 'Victor',
    detail:
      'BBQ chicken was delicious and quantity was great. Enjoyed the warm chicken with crisp salad. Felt like a very healthy well balanced meal',
    detail_id: 67660,
    entity_id: 1,
    entity_pk_value: 3169,
    rating: '100.0000',
    review_id: 68797,
    reviews: '81',
    stars: '4.10000000',
    status_id: 1,
    title: 'BBQ chicken was delicious...'
  }
]

export const reviews = [...Array(50).keys()].map(
  () => revs[Math.floor(Math.random() * 3 + 0)]
)
