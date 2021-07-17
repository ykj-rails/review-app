const request = async (path, options = {}) => {
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`
  const response = await fetch(url, options)
  return response.json()
}

export const getRestaurants = async (arg = {}) => {
  const params = new URLSearchParams(arg)
  return request(`/restaurants?${params.toString()}`)
}

export const getRestaurant = async (restaurantId) => {
  return request(`/restaurants/${restaurantId}`)
}

export const getRestaurantReviews = async (restaurantId, arg = {}) => {
  const params = new URLSearchParams(arg)
  return request(`/restaurants/${restaurantId}/reviews?${params.toString()}`)
}
