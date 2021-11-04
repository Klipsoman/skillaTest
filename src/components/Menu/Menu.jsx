import React from "react";
import MenuItem from "./MenuItem";
import vector from "../../assets/images/icons/vector.png";
import ok from "../../assets/images/icons/ok.png";
import msg from "../../assets/images/icons/msg.png";
import phone from "../../assets/images/icons/phone.png";
import Button from "./Button";
import plus from "../../assets/images/icons/plus.svg";
import pay from "../../assets/images/icons/pay.svg";
import logo from "../../assets/images/icons/Logo.svg";
import users from "../../assets/images/icons/users.png";
import user from "../../assets/images/icons/user.png";
import file from "../../assets/images/icons/file.png";
import settings from "../../assets/images/icons/settings.png";
import book from "../../assets/images/icons/book.png";


export default function Menu() {
  return (
    <div className="menu">
      <img className="menu__logo logo" src={logo} />
      <ul className="menu__items">
        <MenuItem name="Итоги" icon={vector} />
        <MenuItem name="Заказы" icon={ok} />
        <MenuItem name="Сообщения" icon={msg} />
        <MenuItem name="Звонки" icon={phone} active={true} />
        <MenuItem name="Контрагенты" icon={users} />
        <MenuItem name="Документы" icon={file} />
        <MenuItem name="Исполнители" icon={user} />
        <MenuItem name="Отчеты" icon={msg} />
        <MenuItem name="База знаний" icon={book} />
        <MenuItem name="Настройки" icon={settings} />
      </ul>
      <Button icon={plus} alt="add">
        Добавить заказ
      </Button>
      <Button icon={pay} alt="add">
        Оплата
      </Button>
    </div>
  );
}
