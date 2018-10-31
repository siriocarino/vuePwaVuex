

export const getters = {
     countLinks: state => state.links.length,
     doneTodos: state => state.todos.filter(todo => todo.done),
     // getTodoByID: state => state.todos.find(todo => todo.id === id),
     cartList: state => state.cart.added.filter(cart => cart),
     showCart:  state => state.ui.showCartList,
     incrementItemQuantity: state =>  state.cart.quantity++,
     cartProducts: (state, getters, rootState) => {
         return state.cart.added.map((item) => {
          return {
               title: item.title,
               price: item.price,
               quantity: item.quantity
          };
        })
     },
     cartTotalPrice: (state, getters) => {
          console.log(getters.cartProducts)
          return getters.cartProducts.reduce((total, products) => {
               return state.cart.total + products.price * products.quantity
          }, 0)
     }
}