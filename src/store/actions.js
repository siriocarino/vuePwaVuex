export const actions = {
    addLink: (context, payload) => {
        context.commit("ADD_LINK", payload)
    },
    increment: (context, payload) => {
        context.commit("INCREMENT", context)
    },
    addToCart: (context, payload) => {
        context.commit("ADD_TO_CART", payload)
    }

}