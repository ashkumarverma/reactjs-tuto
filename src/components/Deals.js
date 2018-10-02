import React from 'react';
// import { createStore } from 'redux';
import { connect } from 'react-redux';
import { STATUS_CODES } from 'http';

const ExpenseList = (props) => (
    <div className="any-text litegrey2 padding100">
        <div className="container">
            <div className="row">
                <h1>Expense List</h1>
               
                {props.filters.text}
                {props.expenses.length}
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);


// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//     type: 'INCREAMENT',
//     incrementBy
// });

// const decrementCount = ({ decrementBy = 10 } = {}) => ({
//     type: 'DECREAMENT',
//     decrementBy
// });

// const countReducer = (state = { count: 0 }, action) => {
//     switch (action.type) {
//         case 'INCREAMENT':
//             return {
//                 count: state.count + action.incrementBy
//             };
//         case 'DECREAMENT':
//             return {
//                 count: state.count - action.decrementBy
//             };
//         case 'SET':
//             return {
//                 count: action.count
//             };
//         case 'RESET':
//             return {
//                 count: 0
//             };
//         default:
//             return state;
//     }
// }


// const store = createStore(countReducer);

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });

// store.dispatch({
//     type: 'INCREAMENT',
//     incrementBy: 5
// });


// store.dispatch({
//     type: 'DECREAMENT',
//     decrementBy: 3
// });



// store.dispatch({
//     type: 'INCREAMENT'
// });

//unsubscribe();

//console.log(store.getState());



// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });

// unsubscribe();
// store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch(incrementCount());

// store.dispatch(decrementCount({ decrementBy: 4 }));

// store.dispatch(decrementCount());

// console.log(store.getState());

// const Deal = () => (
//     <p>This is Contact.</p>
// )
//export default Deal;