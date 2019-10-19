import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3002',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getMenu() {
    return apiClient.get('/food')
  },
  // getRecipe(id) {
  //   return apiClient.get('/recipes/' + id)
  // },
  // postRecipe(recipe) {
  //   console.log('service: postRecipe recipe :', recipe)
  //   return apiClient.post('/recipes/', recipe)
  // },
  // getIngredients() {
  //   return apiClient.get('/ingredients')
  // },
  // changeRecipe(recipe) {
  //   console.log('service: changeRecipe recipe :', recipe)
  //   return apiClient.put(`/recipes/${recipe.id}`, recipe)
  // },
  // deleteRecipe(recipe) {
  //   console.log('service: deleteRecipe recipe :', recipe)
  //   return apiClient.delete(`/recipes/${recipe.id}`, recipe)
  // }
}
