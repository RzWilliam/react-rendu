import React from 'react'
import Select from 'react-select'
import Normal from '../../assets/Normal.png'
import Continuous from '../../assets/Continuous.webp'
import Equip from '../../assets/spells/Equip.webp'
import QuickPlay from '../../assets/spells/Quick-Play.webp'
import Field from '../../assets/spells/Field.webp'
import Ritual from '../../assets/spells/Ritual.webp'

export default function FilterSpell(props) {
  const races = [
    {value: null, label: <div>All</div>},
    {value: "&race=normal", label: <div><img src={Normal} alt="Normal"/>Normal</div>},
    {value: "&race=continuous", label: <div><img src={Continuous} alt="Continuous"/>Continuous</div>},
    {value: "&race=field", label: <div><img src={Field} alt="Normal"/>Field</div>},
    {value: "&race=equip", label: <div><img src={Equip} alt="Normal"/>Equip</div>},
    {value: "&race=quick-play", label: <div><img src={QuickPlay} alt="Normal"/>Quick-Play</div>},
    {value: "&race=ritual", label: <div><img src={Ritual} alt="Normal"/>Ritual</div>},
  ]  
  return (
    <>
        <Select className="select" aria-label=".form-select-lg example" ref={props.spellRace} options={races} placeholder="Choose type of spell ..."/>
    </>
  )
}