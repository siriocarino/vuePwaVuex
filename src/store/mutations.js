
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
          state.products.all = products
     },
     [types.PUSH_PRODUCTS_TO_CART](state, products) {
          console.log(products)
          products.quantity = 1;
          console.log(products)

          state.cart.added.push(products)
     },
     [types.INCREMENT_CART](state, products) {
          console.log(products)
          const cartItem = state.cart.added.find(item => item.id === products.id)
          cartItem.quantity++
     },
     [types.DECREMENT_PRODUCT](state, products) {
          // const product = state.products.all.find(product => product.id === products.id)
          // product.inventory--
     },

}


