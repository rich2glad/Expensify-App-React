import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('should be 0 for no expense', ()=>{
    const response = selectExpensesTotal([]);
    expect(response).toBe(0)
});

test('should should add up single expense', ()=>{
    const response = selectExpensesTotal([expenses[0]]);
    expect(response).toBe(195)
});

test('should should add up all expense', ()=>{
    const response = selectExpensesTotal([...expenses]);
    expect(response).toBe(21040)
});