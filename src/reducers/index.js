// let user = localStorage.getItem('USER') ? JSON.parse(localStorage.getItem('USER')) :{};
// let islogin = localStorage.getItem('ISLOGIN') ? JSON.parse(localStorage.getItem('ISLOGIN')) : 0;
let count = localStorage.getItem('COUNT') ? localStorage.getItem('COUNT') : 0;
let defaultState = {
    // user,
    count,
    // islogin
};
export const reducers = (state = defaultState, action = {}) => {
    switch (action.type) {
        // case 'setUser':
        //     localStorage.setItem('USER', JSON.stringify(action.user));
        //     return {...state, ...{user: action.user}};
        case 'setCount':
            localStorage.setItem('COUNT', action.count);
            return {...state, ...{count: action.count}};
        // case 'setLogin':
        //     localStorage.setItem('ISLOGIN', action.islogin);
        //     return {...state, ...{islogin: action.islogin}};
        default:
            return state;
    }
}
export default reducers