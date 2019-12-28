export const rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const toNumberWithSpaces = (value: number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export const getPercentage = (percentage: number, value: number): number => {
  const percent = Math.round(value / 100)

  return percentage * percent
}