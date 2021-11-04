import React from 'react'
import { useSelector } from 'react-redux'
import TableItem from './TableItem'

export default function Table() {
    let calls = useSelector(state=>state.main.calls)
    return (
        <div className="table">
          <div className="table__header">
              <div>Тип</div>
              <div>Время</div>
              <div>Сотрудник</div>
              <div>Звонок</div>
              <div>Источник</div>
              <div>Оценка</div>
              <div>Длительность</div>
          </div>

          {calls && calls.map((el,i)=>{
              return <TableItem key={el + i} {...el}/>
          }) }
        </div>
    )
}
