import {setEndDate,setStartDate,setTextFilter,sortByAmount,sortByDate} from '../../actions/filters' 
import moment from 'moment'


test('should generate set start date action Object', ()=>{
    const action= setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set End date action Object', ()=>{
    const action= setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate set sortByAmount action Object', ()=>{
    const action= sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});
    test('should generate set sortByDate action Object', ()=>{
        const action= sortByDate();
        expect(action).toEqual({
            type: 'SORT_BY_DATE'
        })
});

test('should generate set test action Object', ()=>{
    const action= setTextFilter('abcd');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:'abcd'
    })
});

test('should generate set sortByDate action Object', ()=>{
    const action= setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    })
});