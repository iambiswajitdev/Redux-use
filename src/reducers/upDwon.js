const initalstat = 0;
const changeTheNumber = (state = initalstat, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DICREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default changeTheNumber;
