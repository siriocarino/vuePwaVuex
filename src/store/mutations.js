
import  * as types from './mutation-types'

export const mutations = {
     ADD_LINK: (state, link) => {
          state.links.push(link)
     },
     [types.INCREMENT] (state) {
          state.count++
     },
     [types.ERROR](state, error) {
          state.error = error;
          state.success = false;
     },
     [types.SUCCESS](state) {
          state.error = false;
          state.success = true;
     },
     [types.ADD_TO_CART](state, item) {
          state.cart.added.push(item)
     },
     [types.SHOW_CART](state, boolean) {
          state.ui.showCartList = boolean;
     },
     [types.SET_PRODUCTS](state, products) {
          state.products.all = products;
     },

}