import { ADD_USER } from "./ActionsTypes";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    data: user,
  };
};
