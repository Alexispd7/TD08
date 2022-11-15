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
            let newState = {...state}
            newState.age = state.age + 1
            return newState
        case 'INCREMENT-CHILDREN-COUNT':
            //state.childrenCount = state.childrenCount + 1
            return {
                ...state, childrenCount: state.childrenCount + 1
            }
        case 'CHANGE-NAME':
            return {
                ...state, name: action.newName}


        default:
            throw new Error('I don\'t understand this type')
    }
}
