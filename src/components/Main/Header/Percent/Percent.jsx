import React from 'react'

export default function Percent({content, contentValue, progress, color, max}) {
    if(max !== '100'){
       progress = progress * 100 / max;
    }
    return (
        <div className="percent">
            <div className="percent__title">{content} <span style={{color: color}}>{contentValue}</span></div>
            <div className="percent__progress-bar">
                <div className="percent__progress-value" style={{width: progress + '%', background: color }}></div>
            </div>
          </div>
    )
}
