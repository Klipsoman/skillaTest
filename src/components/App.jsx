import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByAll } from "../redux/mainReducer";
import Main from "./Main/Main";
import Menu from "./Menu/Menu";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByAll());
  }, [dispatch]);

  return (
    <div className="app">
      <Menu />
      <Main />
    </div>
  );
}

export default App;
