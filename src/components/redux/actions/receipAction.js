import { burgerTypes } from "../types/receiptTypes";

// const initialState = []

export const reset = () => {
    return {
        type: burgerTypes.BURGER_RESET,
        payload: [],
    };
}

export const addBurger = (burger) => {
    return {
        type: burgerTypes.ADD_BURGER,
        payload: burger,
    };
}