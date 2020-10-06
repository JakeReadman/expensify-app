import moment from 'moment';

export default [
  {
    id: '1',
    description: 'weed',
    note: '',
    amount: 6000,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'beer',
    note: '',
    amount: 900,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'gym',
    note: '',
    amount: 2250,
    createdAt: moment(0).add(4, 'days').valueOf(),
  },
];
