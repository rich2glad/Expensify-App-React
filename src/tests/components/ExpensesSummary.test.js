import React from 'react';
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'

test('should correctly render Expense with 1 expense',()=>{
    const wrapper = shallow(<ExpensesSummary  expenseCount={1} expensesTotal={234.45} />);
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render Expense with multiple expense',()=>{
    const wrapper = shallow(<ExpensesSummary  expenseCount={23} expensesTotal={23445.90} />);
    expect(wrapper).toMatchSnapshot();
})