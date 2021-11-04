import React, { useRef, useState } from "react";
import incomecall from "../../../../assets/images/icons/incomecall.svg";
import incomecallred from "../../../../assets/images/icons/incomecallred.svg";
import outcall from "../../../../assets/images/icons/outcall.svg";
import outcallred from "../../../../assets/images/icons/outcallred.svg";

export default function TableItem({
  date,
  person_avatar,
  from_number,
  contact_company,
  time,
  in_out,
  record,
  partnership_id,
}) {
  let [isMouseOver, setIsMouseOver] = useState(false);
  let [audioCall, setAudioCall] = useState("");
  let ref = useRef();
  let dateSub = date.substr(11, 5);
  function secondsToSecAndMin(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }
  function handleMouseEnter() {
    setIsMouseOver(true);
    // loadAudioCall();
  }
  function handleMouseLeave() {
    setIsMouseOver(false);
  }

  // async function loadAudioCall() {
  //   let response = await fetch(
  //     `https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${partnership_id}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: "Bearer qwerty123",
  //       },
  //     }
  //   );
  //   let ctx = new AudioContext();
  //   let source = ctx.createMediaElementSource(ref.current);
  //   const buffer = await response.arrayBuffer();
  //   const audio = await ctx.decodeAudioData(buffer);
  //   setAudioCall(audio);

  //   var gainNode = ctx.createGain();
  //   source.connect(gainNode);
  //   gainNode.connect(ctx.destination);
  // }

  return (
    <div
      className="table__item ceil"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="ceil__call">
        {in_out === "0" && time !== "0" && <img src={outcall} alt="" />}
        {in_out === "0" && time === "0" && <img src={outcallred} alt="" />}
        {in_out === "1" && time !== "0" && <img src={incomecall} alt="" />}
        {in_out === "1" && time === "0" && <img src={incomecallred} alt="" />}
      </div>
      <div className="ceil__time">{dateSub}</div>
      <div className="ceil__person-img">
        <img src={person_avatar} alt="avatar" />
      </div>
      <div className="ceil__phone">{from_number}</div>
      <div className="ceil__from">{contact_company}</div>
      <div className="ceil__point">
        <span>Скрипт не исользован</span>
      </div>
      <div className="ceil__duration">
        {!isMouseOver && secondsToSecAndMin(time)}
        {isMouseOver && <audio src={audioCall} controls ref={ref}></audio>}
      </div>
    </div>
  );
}
