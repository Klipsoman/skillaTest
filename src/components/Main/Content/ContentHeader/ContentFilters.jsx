import React, { useState } from "react";
import Filter from "./Filter";
import {
  filterByIncome,
  filterByAll,
  filterByOuter,
} from "../../../../redux/mainReducer";
import { useDispatch } from "react-redux";

export default function ContentFilters() {
  let [activeTitle, setActiveTitle] = useState("Все звонки");
  let [active, setActive] = useState(false);
  let dispatch = useDispatch();

  function handleSetActive(e) {
    if (e.target.innerHTML === "Все звонки") {
      dispatch(filterByAll());
      setActiveTitle("Все звонки");
    }
    if (e.target.innerHTML === "Входящие") {
      dispatch(filterByIncome());
      setActiveTitle("Входящие");
    }
    if (e.target.innerHTML === "Исходящие") {
      dispatch(filterByOuter());
      setActiveTitle("Исходящие");
    }
    setActive(!active);
  }

  return (
    <div className="filters content__filters">
      <div className="filters__search">
        <input
          type="text"
          placeholder="Поиск по звонкам"
        />
      </div>

      <Filter title="Все типы" />
      <Filter title="Все сотрудники" />
      <Filter
        title={activeTitle}
        setActiveTitle={setActiveTitle}
        options={["Все звонки", "Входящие", "Исходящие"]}
        handleSetActive={handleSetActive}
        active={active}
        setActive={setActive}
      />
      <Filter title="Все источники" />
      <Filter title="Все оценки" />
      <Filter title="Все ошибки" />
    </div>
  );
}
