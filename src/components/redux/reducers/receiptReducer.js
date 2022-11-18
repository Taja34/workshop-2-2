import { burgerTypes } from "../types/receiptTypes"

const arrayBurgers = []

export const burgerReducer = (state = { arrayBurgers }, action) => {
    switch (action.type) {
        case burgerTypes.BURGER_RESET:
            return {
                ...state,arrayBurgers: action.payload
            }
        case burgerTypes.ADD_BURGER:
            return {
                ...state, arrayBurgers: action.payload
            }
        default:
            return state
    }


}