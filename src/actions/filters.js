//Set text filter

export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

//Sort by Date

export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

//Sort by Amount

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

//Set Start Date

export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

//Set End Date

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});
