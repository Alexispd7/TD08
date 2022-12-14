import {TodolistType} from "../App";

type ActionType = {
    type: string
        [key: string]: any
}

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state
export const todolistReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'INCREMENT-AGE':

            return state

        default:
            throw new Error('I don\'t understand this type')
    }
}
