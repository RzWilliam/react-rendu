import React from 'react'
import Select from 'react-select'
import Normal from '../../assets/Normal.png'
import Continuous from '../../assets/Continuous.webp'
import Counter from '../../assets/Counter.webp'


export default function FilterTrap(props){
  const races = [
    {value: null, label: <div>All</div>},
    {value: "&race=normal", label: <div><img src={Normal} alt="Normal"/>Normal</div>},
    {value: "&race=continuous", label: <div><img src={Continuous} alt="Continuous"/>Continuous</div>},
    {value: "&race=counter", label: <div><img src={Counter} alt="Counter"/>Counter</div>},
  ] 

  return (
    <>
        <Select className="select" aria-label=".form-select-lg example" ref={props.trapRace} options={races} placeholder="Choose type of trap ..."/>
    </>
  )
}