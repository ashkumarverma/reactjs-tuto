import { createStore } from 'redux';


const store = createStore((state = { count: 0 }, action) => {
    // console.log(action.type);
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        default:
            return state;
    }
})

console.log(store.getState());

store.dispatch({
    type: "INCREMENT"
});
console.log(store.getState());