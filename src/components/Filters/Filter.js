import React, { useContext, useRef, useState } from 'react'
import { ApiContext } from '../../context/ApiContext'
import FilterSpell from './FilterSpell'
import FilterTrap from './FilterTrap'
import FilterMonster from './FilterMonster'
import Select from 'react-select'
import Back from '../../assets/back.webp'
import Spell from '../../assets/spell.png'
import Trap from '../../assets/trap.jpg'
import Monster from '../../assets/monster.png'

export default function Filter() {

  const cards = [
    {value : null, label: <div><img src={Back} alt="Card"/>All</div>},
    {value : "&type=Spell%20Card", label: <div><img src={Spell} alt="Spell"/>Spell</div>},
    {value : "&type=Trap%20Card", label: <div><img src={Trap} alt="Trap"/>Trap</div>},
    {value : "&atk=gt", label: <div><img src={Monster} alt="Monster"/>Monster</div>}
  ]

    const {setType, setRace, setPage, setLevel, setAttribute} = useContext(ApiContext)

    const [temporaryType, setTemporaryType] = useState('')

    function handleChange(e){
      // console.log(e.value)
        setTemporaryType(e.value)
    }

    const type = useRef()
    const spellRace = useRef()
    const trapRace = useRef()
    const monsterType = useRef()
    const monsterLevel = useRef()
    const monsterAttribute = useRef()
    const formRef = useRef()

    const handleForm = (e) => {
      e.preventDefault()
      try {
        setRace(null)
        setAttribute(null)
        setLevel(0)
        setPage(0)
        setType(type.current.props.value === null ? null : type.current.props.value.value)
        if(type.current.props.value.value === "&atk=gt"){
          setRace(monsterType.current.props.value === null ? null : monsterType.current.props.value.value)
          setLevel(monsterLevel.current.props.value === null ? null : monsterLevel.current.props.value.value)
          setAttribute(monsterAttribute.current.props.value === null ? null : monsterAttribute.current.props.value.value)
        } else if (type.current.props.value.value === "&type=Spell%20Card"){
          setRace(spellRace.current.props.value === null ? null : spellRace.current.props.value.value)
        } else if (type.current.props.value.value === "&type=Trap%20Card"){
          setRace(trapRace.current.props.value === "Choose a type of trap ..." ? null : trapRace.current.props.value.value)
        }   
      } catch (error) {
          console.dir(error)
      }
    }

  return (
    <>
        <form ref={formRef} onSubmit={handleForm}>
        <section className="selectContainer d-flex flex-wrap justify-content-center" style={{ gap: "30px"}}>
            <Select className="select" aria-label=".form-select-lg example" ref={type} options={cards} onChange={handleChange} placeholder="Choose a type of card ..."/>
            {temporaryType === "&type=Spell%20Card" &&
              <FilterSpell spellRace={spellRace}/>
            }
            {temporaryType === "&type=Trap%20Card" &&
              <FilterTrap trapRace={trapRace}/>
            }
            {temporaryType === "&atk=gt" &&
              <FilterMonster monsterType={monsterType} monsterLevel={monsterLevel} monsterAttribute={monsterAttribute}/>
            }
          </section>
          <div className='btn_prev_next my-4'>
            <button>Save Filter</button>
          </div>
        </form>

        
    </>
  )
}