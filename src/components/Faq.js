import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseForm from './ExpenseForm';


const Faq = () => (
    <div className="any-text litegrey2 padding100">
        <div className="container">
            <div className="row">
                <ExpenseListFilters />
                <ExpenseList />
                <br/>
                <ExpenseForm />
            </div>
        </div>
    </div>
)

export default Faq;
// import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';

// const addExpenses = ({
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
// } = {}
// ) => ({
//     type: 'ADD_EXPENSES',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// })

// const removeExpenses = ({ id }) => ({
//     type: 'REMOVE_EXPENSES',
//     id
// })

// const editExpenses = (id, updates) => ({
//     type: 'EDIT_EXPENSES',
//     id,
//     updates
// })

// const expenseReducerDefaultState = [];

// const expenseReducer = (state = expenseReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSES':
//             return [
//                 ...state,
//                 action.expense
//             ];
//         case 'REMOVE_EXPENSES':
//             return state.filter(({ id }) => id !== action.id);
//         case 'EDIT_EXPENSES':
//             return state.map((expense) => {
//                 if (expense.id === action.id) {
//                     return {
//                         ...expense,
//                         ...action.updates
//                     }
//                 } else {
//                     return expense
//                 }
//             });
//         default:
//             return state;
//     }
// }

// const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
// });

// const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT'
// });

// const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
// });

// const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
// });

// const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
// });

// const filtersReducerDefaultState = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
// };

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT_FILTER':
//             return {
//                 ...state,
//                 text: action.text
//             };
//         case 'SORT_BY_AMOUNT':
//             return {
//                 ...state,
//                 sortBy: 'amount'
//             };
//         case 'SORT_BY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             };
//         case 'SET_START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             };
//         case 'SET_END_DATE':
//             return {
//                 ...state,
//                 endDate: action.endDate
//             };
//         default:
//             return state;
//     }
// };

//get Visisabl expenses
// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense) => {
//         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());


//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//         if (sortBy === 'date') {
//             return a.createdAt < b.createdAt ? 1 : -1;
//         } else if (sortBy === 'amount') {
//             return a.amount < b.amount ? 1 : -1;
//         }
//     });
// };

// const store = createStore(
//     combineReducers({
//         expenses: expenseReducer,
//         filters: filtersReducer
//     })
// );

// store.subscribe(() => {
//     const state = store.getState();
//     const visiableExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visiableExpenses);
// })



// const expenseOne = store.dispatch(addExpenses({ description: 'Rent', amount: '100', createdAt: 1000 }));
// const expenseTwo = store.dispatch(addExpenses({ description: 'Coffee', amount: '300', createdAt: -1000 }));

//store.dispatch(removeExpenses({ id: expenseOne.expense.id }));

// store.dispatch(editExpenses(expenseTwo.expense.id, { amount: '500' }));

// store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1010));

// const demoStore = {
//     expenses: [{
//         id: 'hgahjgahg',
//         description: 'January Rent',
//         note: 'This was the final payment for the address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// }

// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     ...user
// });

