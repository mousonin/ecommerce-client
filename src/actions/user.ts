export const addUser = (user: any) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const editUser = (user: any) => {
  return {
    type: "EDIT_USER",
    payload: user,
  };
};
