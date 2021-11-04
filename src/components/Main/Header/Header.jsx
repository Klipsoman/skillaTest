import React from "react";
import Percent from "./Percent/Percent";
import search from "../../../assets/images/icons/search.svg";
import ava from "../../../assets/images/icons/ava.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__view">
          <div className="today">Среда, 13 окт</div>
          <Percent
            content="Новые звонки"
            contentValue="20 из 30 шт"
            color="#28A879"
            progress="20"
            max="30"
          />
          <Percent
            content="Качество разговоров"
            contentValue="40%"
            color="#FFD500"
            progress="40"
            max="100"
          />
          <Percent
            content="Конверсия в заказ"
            contentValue="67%"
            color="#EA1A4F"
            progress="67"
            max="100"
          />
          <div className="search">
            <img src={search} alt="" />
          </div>
          <div className="name">ИП Сидорова Александра Михайловна</div>
          <div className="avatar">
            <img src={ava} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
