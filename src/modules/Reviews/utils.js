import moment from 'moment'

export const sortReviews = reviews => {
  return [...reviews].sort((a, b) => {
    const aDetail = a.detail && a.detail.replace('-', '').trim()
    const bDetail = b.detail && b.detail.replace('-', '').trim()

    if (aDetail && bDetail) {
      if (a.stars > b.stars) return -1
      if (a.stars < b.stars) return 1

      const aTime = moment(a.created_at, 'YYYY-MM-DD')
      const bTime = moment(b.created_at, 'YYYY-MM-DD')

      if (aTime.isBefore(bTime)) return 1
      if (bTime.isBefore(aTime)) return -1

      if (aDetail.length > bDetail.length) return -1
      if (bDetail.length > aDetail.length) return 1
    }

    if (aDetail && !bDetail) return -1
    if (bDetail && !aDetail) return 1

    return 0
  })
}

export const formatReviews = reviews => {
  return reviews.map(review => {
    const stars = review.stars ? Math.round(+review.stars * 2) / 2 : 0
    return { ...review, stars }
  })
}