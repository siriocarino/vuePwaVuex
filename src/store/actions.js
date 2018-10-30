
import mokShop from "../api/mok-shop"

export const actions = {
    addLink: (context, payload) => {
        context.commit("ADD_LINK", payload)
    },
    increment: (context, payload) => {
        context.commit("INCREMENT", context)
    },
    addToCart: (context, payload) => {
        context.commit("ADD_TO_CART", payload)
    },
    showCart: (context, payload) => {
        context.commit("SHOW_CART", payload)
    },
    getAllProduts: (context) => {
        mokShop.getProducts(
            products => { context.commit("SET_PRODUCTS", products) } 
        );
    }

}