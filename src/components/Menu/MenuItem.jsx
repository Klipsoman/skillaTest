import React from 'react'

export default function MenuItem({name = '', href = '#', icon = '', alt = '', active = false}) {
    return (
        <li className={active ? "menu__item menu__item-active" : "menu__item"}>
          <img className="menu__icon"  src={icon} alt={alt} />
          <a href={href} className="menu__link">
            {name}
          </a>
        </li>
    )
}
