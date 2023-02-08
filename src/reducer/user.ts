const initialState = {
  list: ["12"],
  activeId: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_USER": {
      break;
    }
    case "EDIT_USER": {
      break;
    }
    default:
      return state;
  }
};

export default userReducer;
