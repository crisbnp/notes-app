export const timeStamp = (date) => {
  let options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }

  return new Date(date).toLocaleDateString('en-US', options)
}