import { useState } from 'react'
import './App.css'

function App() {
  
  const [name,setName]=useState()
  const [gold, setGold] =useState(0)
  const [silver, setSilver]=useState(0)
  const [bronze, setBronze]=useState(0)

  const [countrys, setCountrys]=useState([
    {name:"test", gold:2, silver:3, bronze:4}
  ])


  const Clickadd=(e)=>{
    e.preventDefault();
    const has = countrys.findIndex((item) => item.name === name);
    if(has!=-1){alert("이미 존재합니다."); return ;}
    else if(name=="" || name == undefined){alert("값이 비었습니다."); return ;}
    else{const newCountry={
      name: name,
      gold: gold,
      silver: silver,
      bronze: bronze
    };
    setCountrys([...countrys,newCountry]); }

    setName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  }


  function ClickUpadte(){
    const hasresult = countrys.filter((country) => country.name==name);
    const result = countrys.filter((country) => country.name!==name);
    if(hasresult==undefined|| hasresult==""){alert("리스트에 없는 국가입니다. 추가 후 시도해주세요.")}
    else{
      const updateCountry={
        name: name,
        gold: gold,
        silver: silver,
        bronze: bronze
      }
      setCountrys([...result,updateCountry])
    }
    setName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  }

  function ClickDelete(name){
    alert("삭제하기가 눌렸습니다")
    const result = countrys.filter((country) => country.name!==name);
    setCountrys([...result])

  }

  return (
    <>
      <div style={{backgroundColor: 'white', color:'black', padding:"50px", boxShadow:"2px"}}>
        <h1 style={{color:'blue'}}>2024 파리 올림픽</h1>
        <div style={{display:"flex",  gap: "1%", width:"100%"}}> 
          <p>국가명</p>
          <p>금메달</p>
          <p>은메달</p>
          <p>동메달</p>
        </div>
        <form onSubmit={Clickadd} id='addupdate'>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input id="gold" value={gold} onChange={(e) => setGold(e.target.value)} type="number"/>
            <input id="silver" value={silver} onChange={(e) => setSilver(e.target.value)} type="number"/>
            <input id="bronze" value={bronze} onChange={(e) => setBronze(e.target.value)} type="number"/>
            <input type='submit' form='addupdate' value="국가추가" name='ADD'/>
            <input type='button' form='addupdate' value="업데이트" name='UPDATE' onClick={ClickUpadte}/>
          </form>
        
      </div>

      <div style={{display:"grid", placeItems: "center", width:"100%"}}>
        <div style={{display:"flex",  gap: "5%", backgroundColor:"blue", width:"100%"}}> 
          <p>국가명</p>
          <p>금메달</p>
          <p>은메달</p>
          <p>동메달</p>
          <p>액션</p>
        </div>
        <div style={{backgroundColor:"skyblue", width:"100%", color:"black"}}>
        {
          countrys.map((country)=>{
            return (
              <div key={country.name} style={{display:"flex",  gap: "5%", placeItems: "center" }}>
                <p>{country.name}</p>
                <p>{country.gold}</p>
                <p>{country.silver}</p>
                <p>{country.bronze}</p>
                <p><button onClick={()=>ClickDelete(country.name)}>삭제하기</button></p>
              </div>
               )
          })
        }
        </div>
      </div>
    </>
  )
}

export default App
