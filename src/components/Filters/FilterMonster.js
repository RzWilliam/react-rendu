import React, { useState } from 'react'
import Select from 'react-select'
import Dark from '../../assets/monsters/DARK.png'
import Divine from '../../assets/monsters/DIVINE.png'
import Earth from '../../assets/monsters//EARTH.png'
import Fire from '../../assets/monsters/FIRE.png'
import Light from '../../assets/monsters/LIGHT.png'
import Wind from '../../assets/monsters/WIND.png'
import Water from '../../assets/monsters/WATER.png'
import Level from '../../assets/monsters/LEVEL.png'

import Normal from '../../assets/monsters/normal.png';
import Effect from '../../assets/monsters/effect.jpg';
import Synchro from '../../assets/monsters/synchro.png';
import Fusion from '../../assets/monsters/fusion.png';
import XYZ from '../../assets/monsters/xyz.png';
import Ritual from '../../assets/monsters/ritual.png';
import Link from '../../assets/monsters/link.png';
import PendulumEffect from '../../assets/monsters/pendulumEffect.png';
import PendulumNormal from '../../assets/monsters/pendulumNormal.png';
import PendulumFusion from '../../assets/monsters/pendulumFusion.png';
import PendulumSynchro from '../../assets/monsters/pendulumSynchro.png';
import PendulumXYZ from '../../assets/monsters/pendulumXYZ.webp';

export default function FilterMonster(props) {

  const levels = [
    {value: null, label: <div>All</div>},
    {value: 1, label: <div><img src={Level} alt="Star"/>1</div>},
    {value: 2, label: <div><img src={Level} alt="Star"/>2</div>},
    {value: 3, label: <div><img src={Level} alt="Star"/>3</div>},
    {value: 4, label: <div><img src={Level} alt="Star"/>4</div>},
    {value: 5, label: <div><img src={Level} alt="Star"/>5</div>},
    {value: 6, label: <div><img src={Level} alt="Star"/>6</div>},
    {value: 7, label: <div><img src={Level} alt="Star"/>7</div>},
    {value: 8, label: <div><img src={Level} alt="Star"/>8</div>},
    {value: 9, label: <div><img src={Level} alt="Star"/>9</div>},
    {value: 10, label: <div><img src={Level} alt="Star"/>10</div>},
    {value: 11, label: <div><img src={Level} alt="Star"/>11</div>},
    {value: 12, label: <div><img src={Level} alt="Star"/>12</div>},
  ]

  const attributes= [
    {value : null, label: <div>All</div>},
    {value: 'dark', label: <div><img src={Dark} alt="Dark"/>Dark</div>},
    {value: 'divine', label: <div><img src={Divine} alt="Divine"/>Divine</div>},
    {value: 'earth', label: <div><img src={Earth} alt="Earth"/>Earth</div>},
    {value: 'fire', label: <div><img src={Fire} alt="Fire"/>Fire</div>},
    {value: 'Light', label: <div><img src={Light} alt="Light"/>Light</div>},
    {value: 'wind', label: <div><img src={Wind} alt="Wind"/>Wind</div>},
    {value: 'water', label: <div><img src={Water} alt="Water"/>Water</div>},
  ]

  const types = [
    {value : null, label: <div>All</div>},
    {value: '&type=Normal Monster', label: <div><img src={Normal} alt="Normal"/>Normal</div>},
    {value: '&type=Normal Tuner Monster', label: <div><img src={Normal} alt="Normal Tuner"/>Normal Tuner</div>},
    {value: '&type=Effect Monster', label: <div><img src={Effect} alt="Effect"/>Effect</div>},
    {value: '&type=Tuner Monster', label: <div><img src={Effect} alt="Tuner"/>Tuner</div>},
    {value: '&type=Flip Effect Monster', label: <div><img src={Effect} alt="Flip Effect"/>Flip Effect</div>},
    {value: '&type=Spirit Monster', label: <div><img src={Effect} alt="Spirit"/>Spirit Monster</div>},
    {value: '&type=Union Effect Monster', label: <div><img src={Effect} alt="Union Effect"/>Union Effect</div>},
    {value: '&type=Gemini Monster', label: <div><img src={Effect} alt="Gemini"/>Gemini</div>},
    {value: '&type=Pendulum Normal Monster', label: <div><img src={PendulumNormal} alt="Pendulum Normal"/>Pendulum Normal</div>},
    {value: '&type=Pendulum Effect Monster', label: <div><img src={PendulumEffect} alt="Pendulum Effect"/>Pendulum Effect</div>},
    {value: '&type=Pendulum Tuner Effect Monster', label: <div><img src={PendulumEffect} alt="Pendulum Tuner Effect"/>Pendulum Tuner Effect</div>},
    {value: '&type=Pendulum Flip Effect Monster', label: <div><img src={PendulumEffect} alt="Pendulum Flip Effect"/>Pendulum Flip Effect</div>},
    {value: '&type=Pendulum Effect Fusion Monster', label: <div><img src={PendulumFusion} alt="Pendulum Effect Fusion"/>Pendulum Effect Fusion</div>},
    {value: '&type=Ritual Monster', label: <div><img src={Ritual} alt="Ritual"/>Ritual</div>},
    {value: '&type=Ritual Effect Monster', label: <div><img src={Ritual} alt="Ritual Effect"/>Ritual Effect</div>},
    {value: '&type=Toon Monster', label: <div><img src={Effect} alt="Toon"/>Toon</div>},
    {value: '&type=Fusion Monster', label: <div><img src={Fusion} alt="Fusion"/>Fusion</div>},
    {value: '&type=Synchro Monster', label: <div><img src={Synchro} alt="Synchro"/>Synchro</div>},
    {value: '&type=Synchro Tuner Monster', label: <div><img src={Synchro} alt="Synchro Tuner"/>Synchro Tuner</div>},
    {value: '&type=Synchro Pendulum Effect Monster', label: <div><img src={PendulumSynchro} alt="Synchro Pendulum Effect"/>Synchro Pendulum Effect</div>},
    {value: '&type=XYZ Monster', label: <div><img src={XYZ} alt="XYZ"/>XYZ</div>},
    {value: '&type=XYZ Pendulum Effect Monster', label: <div><img src={PendulumXYZ} alt="XYZ Pendulum Effect"/>XYZ Pendulum Effect</div>},
    {value: '&type=Link Monster', label: <div><img src={Link} alt="Link"/>Link</div>},
  ]

  const [temporaryType, setTemporaryType] = useState('')

  function handleTypeChange(e){
    setTemporaryType(e.value)
  }

  return (
    <>
        <Select className="select" aria-label=".form-select-lg example" ref={props.monsterType} options={types} placeholder="Choose a type of monster ..." onChange={handleTypeChange}/>
        {temporaryType !== '&type=Link Monster' && 
        <Select className="select" aria-label=".form-select-lg example" ref={props.monsterLevel} options={levels} placeholder="Select a level/rank ..."/>
        }
        <Select className="select" aria-label=".form-select-lg example" ref={props.monsterAttribute} options={attributes} placeholder="Select an attribute ..."/>
    </>
  )
}