import React from 'react';
import { connect } from 'react-redux';
import { removeExpenses } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>
        {numeral(amount /100).format('$0,0.00')} 
        - 
        {moment(createdAt).format('MMMM Do, YYYY')}</p>

        <button onClick={() => {
            dispatch(removeExpenses({ id }));
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem);