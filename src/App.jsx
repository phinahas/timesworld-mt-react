import { useState, useEffect } from "react";
import "./App.css";

//redux
import { useDispatch, useSelector } from "react-redux";
import { SET_USER } from "./store/actions";

//routes
import AppRoutes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  const userAuthConfigFromStore = useSelector((state) => state.userAuth);

  useEffect(() => {
    if (!userAuthConfigFromStore.user) {
      const stored = sessionStorage.getItem("user");
      if (stored) {
        dispatch({
          type: SET_USER,
          payload: JSON.parse(stored),
        });
      }
    }
  }, [userAuthConfigFromStore]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
