import uuid from 'uuid';


export const addExpenses = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
) => ({
    type: 'ADD_EXPENSES',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

export const removeExpenses = ({ id }) => ({
    type: 'REMOVE_EXPENSES',
    id
})

export const editExpenses = (id, updates) => ({
    type: 'EDIT_EXPENSES',
    id,
    updates
})