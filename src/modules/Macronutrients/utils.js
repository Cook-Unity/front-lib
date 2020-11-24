export const MACRO_FAT = 9
export const MACRO_CARBS = 4
export const MACRO_PROTEIN = 4

export const getCalories = (grams, k) => Number(grams) * Number(k)

export const getPercentage = (calories, totalCalories) =>
  Math.floor((Number(calories) * 100) / Number(totalCalories))

export const FAT = 65
export const CARBS = 278
export const PROTEIN = 50

export const getDietaryValue = (grams, k) => (Number(grams) / Number(k)) * 100

export const roundTo100 = arr => {
  const {indexOfHighest, remaining} = arr.reduce(
    ({indexOfHighest, remaining, highest}, curr, i) => {
      let newHighest = highest
      let newIndex = indexOfHighest
      const newRemaining = remaining - curr

      if (curr > highest) {
        newHighest = curr
        newIndex = i
      }

      return {
        indexOfHighest: newIndex,
        highest: newHighest,
        remaining: newRemaining
      }
    },
    {indexOfHighest: 0, remaining: 100, highest: 0}
  )

  return arr.map((n, i) => {
    if (i === indexOfHighest) {
      return n + remaining
    }

    return n
  })
}

export const formatProgress = x => `${x}%`
