// general logic: as an api call to get people returns 10 per page and a request to get one
// person requires their number in order in the whole list of people we need to calculate this
// number based on a page we are on and the index in the object we receive
// we check for the condition below because there was no person with a number 17 (bug on API)
// that is why starting the person with the corresponding number we need to add 2 to index
// instead of 1 (we add 1 because index starts with 0 but api starts counting people from 1)

export const getPersonAPIId = (index: number, page: number) => {
  return (page > 1 && index > 5) || page > 2
    ? +index + 2 + 10 * (page - 1)
    : +index + 1 + 10 * (page - 1);
};

export const getPlanetsAPIId = (index: number, page: number) =>
  +index + 1 + 10 * (page - 1);
