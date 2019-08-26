import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);
  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };
  const setAlert = alert => dispatch({ type: SET_ALERT, payload: alert });
  return (
    <AlertContext.Provider value={{ alert: state, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
