import { ADD_USER } from "./ActionsTypes";

const initialState = {
  userList: [],
};
let newuserList;
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      newuserList = state.userList.concat(action.data);
      console.log(newuserList);
      return {
        ...state,
        userList: newuserList,
      };

    default:
      return state;
  }
};

export default UserReducer;
