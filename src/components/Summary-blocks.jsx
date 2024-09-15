import React from 'react'

function SummaryBlock (props) {
  const {B_icon_src, B_icon_alt, B_name, B_score} = props;

  return (
    <div className='summary-block'>
      <div id='B-wrapper'>
        <img src={B_icon_src} alt={B_icon_alt} />
        <p id="block-name">{B_name}</p>
      </div>

      <p id="block-score"><span id='score'>{B_score}</span> / 100</p>
    </div>
  )
}

export default SummaryBlock