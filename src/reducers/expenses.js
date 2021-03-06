const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSES':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSES':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSES':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            });
        default:
            return state;
    }
}

