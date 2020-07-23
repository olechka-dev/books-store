import { ActionReducer } from '@ngrx/store';

const saveToLocalStorage = (state: any, key: string) => {
    localStorage.setItem(key, JSON.stringify(state));
};
const getFromLocalStorage = (key: string) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return null;
    }

};

const key = 'favorite';

export function favoriteMetaReducer(reducer: ActionReducer<any>) {
    let isOnLoad = true;
    return function (state, action) {
        const nextState = reducer(state, action);
        if (isOnLoad) {
            isOnLoad = false;
            const lsState = getFromLocalStorage(key);
            if (lsState) {
                return reducer({ ...state, [key]: lsState }, action);
            }
            return reducer(state, action);
        }

        saveToLocalStorage(nextState[key], key);
        return nextState;
    };
}
