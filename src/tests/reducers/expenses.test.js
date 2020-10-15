import expenesReducer from '../../reducers/expenses'
import expenses from  '../fixtures/expenses'

test(('Should set a default setate'),()=>{
const state = expenesReducer(undefined,{type:'@@INIT'})
expect(state).toEqual([])
});

test(('Should remove expense by id'),()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expenesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
});

test(('Should not remove expense by id'),()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id: '3434'
    };
    const state = expenesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]])
});

test(('Should not add expense'),()=>{
    const action ={
        type:'ADD_EXPENSE',
        expense: {
            id: '4',
        amount:12,
        createdAt:0,
        note:'',
        description:'laptop'
        }

    };
    const state = expenesReducer(expenses,action)
    expect(state).toEqual([...expenses,action.expense])
});

test(('Should not edit expense'),()=>{
    const action ={
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            amount:500
            }
        }
    const state = expenesReducer(expenses,action)
    expect(state[0].amount).toBe(500)
});

test(('Should not edit expense'),()=>{
    const action ={
        type:'EDIT_EXPENSE',
        id:-1,
        updates:{
            amount:500
            }
        }
    const state = expenesReducer(expenses,action)
    expect(state).toEqual(expenses)
});

test(('Should set expense'),()=>{
    const action ={
        type:'SET_EXPENSES',
        expenses:[expenses[1]]
    }
    const state = expenesReducer(expenses,action)
    expect(state).toEqual([expenses[1]])
});