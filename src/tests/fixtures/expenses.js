import moment from 'moment';

export default [{
    id:'1',
    description:'abc',
    note:'',
    amount: 100,
    createdAt:0
},{
    id:'2',
    description:'cde',
    note:'',
    amount: 200,
    createdAt:moment(0).subtract(4, 'days').valueOf()
},{
    id:'3',
    description:'efg',
    note:'',
    amount: 300,
    createdAt:moment(0).add(4, 'days').valueOf()
}];