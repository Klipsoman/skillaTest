import { getCalls } from "../api/api";

const SET_DATA = "SET_DATA";

const initialState = {
  calls: null,
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, calls: action.payload };
    default:
      return state;
  }
}
export const setData = (payload) => ({ type: SET_DATA, payload });
export const filterByAll = () => (dispatch) => {
  getCalls()
    .then((res) => res.json())
    .then((data) => dispatch(setData(data)))
    .catch((err) => console.log(err));
};
export const filterByIncome = () => (dispatch) => {
  getCalls(1)
    .then((res) => res.json())
    .then((data) => dispatch(setData(data)))
    .catch((err) => console.log(err));
};

export const filterByOuter = () => (dispatch) => {
  getCalls(0)
    .then((res) => res.json())
    .then((data) => dispatch(setData(data)))
    .catch((err) => console.log(err));
};
