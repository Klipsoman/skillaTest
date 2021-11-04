import React from 'react'
import plusBlue from "../../../../assets/images/icons/plusBlue.svg";
import calendar from "../../../../assets/images/icons/calendar.svg";
import left from "../../../../assets/images/icons/left.svg";
import right from "../../../../assets/images/icons/right.svg";

export default function ContentSettings() {
    return (
        <div className="content__settings">
            <div className="balance content__balance">
              <button className="balance__btn">
                Баланс: <span className="balance__value">272 ₽</span>{" "}
                <img className="balance__icon" src={plusBlue} alt="" />{" "}
              </button>
            </div>

            <div className="calendar content__calendar">
              <div className="calendar__left">
                <img src={left} alt="" />
              </div>
              <img className="calendar__icon" src={calendar} alt="" />
              <span>3 дня</span>
              <div className="calendar__right">
                <img src={right} alt="" />
              </div>
            </div>
          </div>
    )
}
