import {addExpense, editExpense, removeExpense} from '../../actions/expenses' 

test('should setup Remove Expense', ()=>{
    const action= removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
});

test('should setup Edit Expense', ()=>{
    const action= editExpense('123abc',{note:'abcd'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{note:'abcd'}
    })
});

test('should setup Add Expense', ()=>{
    const action= addExpense({note:'abcd', description:'abcd', amount:90, createdAt:1000})
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{note:'abcd',
                 description:'abcd',
                amount:90,
                createdAt:1000,
                id: expect.any(String)
             }
    })

    
});     

test('should setup Add Expense', ()=>{
    const action= addExpense({})
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{note:'',
                 description:'',
                amount:0,
                createdAt:0,
                id: expect.any(String)
             }
    })
});   