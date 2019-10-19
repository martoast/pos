import MenuService from '@/services/MenuService'
export const state = () => ({
  Food: []
})

export const mutations = {
  SET_MENUS(state, MENU) {
    state.Food = MENU
  },
  SET_RECIPE(state, recipe) {
    state.recipe = recipe
  }

}
export const actions = {
  fetchMenus({
    commit
  }) {
    return MenuService.getMenus().then(response => {
      commit('SET_MENUS', response.data)
    })
  },
  fetchRecipe({
    commit
  }, id) {
    return MenuService.getMenus(id).then(function (response) {
      commit('SET_RECIPE', response.data)
    })
  },
}
