import React from 'react'

function IconSwitch(props) {
  const { onSwitch, icon } = props
  console.log(onSwitch);
  return (
    <button className='btn btn-outline-info d-block mx-auto mt-1'>
      <div onClick={onSwitch}>{icon}</div>
    </button>
  )
}

export default IconSwitch
