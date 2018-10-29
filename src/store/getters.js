

export const getters = {
     countLinks: state => state.links.length,
     doneTodos: state => state.todos.filter(todo => todo.done),
     cartList: state => state.cart.added.filter(cart => cart.done)

}