import MenuService from '@/services/MenuService'
export const state = () => ({
  Food: []
})

export const mutations = {
  SET_MENU(state, MENU) {
    state.Food = MENU
  }


}
export const actions = {
  fetchMenus({
    commit
  }) {
    return MenuService.getMenu().then(response => {
      commit('SET_MENU', response.data)
    })
  },

}
