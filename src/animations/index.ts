export const scaleInAnimation = {
  from: {
    opacity: 0,
    scale: 0
  },
  to: {
    opacity: 1,
    scale: 1,
    duration: 1
  }
}

export const getCardsAnimation = (index: number) => ({
  from: {
    opacity: 0,
    scale: 0,
    x: '-100%'
  },
  to: {
    opacity: 1,
    scale: 1,
    transformOrigin: 'center',
    x: 0,
    delay: index * 0.1,
    duration: 0.4
  }
})
