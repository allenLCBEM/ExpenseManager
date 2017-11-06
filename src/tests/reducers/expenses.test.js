import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state to empty array', () => {
    const state = expensesReducer(undefined, { type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'expense',
        note:'',
        createdAt: 400000,
        amount: 400
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: 'new note'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe('new note');
});

test('should not edit an expense that is not available', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: {
            note: 'new note'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
