

export const getters = {
     countLinks: state => state.links.length,
     doneTodos: state => state.todos.filter(todo => todo.done),
     // getTodoByID: state => state.todos.find(todo => todo.id === id),
     cartList: state => state.cart.added.filter(cart => cart.done),
     showCart:  state => state.ui.showCartList,
     incrementItemQuantity: state =>  state.cart.quantity++,
}