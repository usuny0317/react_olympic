import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name,setName]=useState("")
  const [gold, setGold] =useState(0)
  const [silver, setSilver]=useState(0)
  const [bronze, setBronze]=useState(0)
  const [countrys, setCountrys]=useState([])
  const [ischeck,setIscheck]=useState(false)

  useEffect(() => {
    const sorted = sortcountry([...countrys]); 
    setCountrys(sorted);
  }, [ischeck]);  

  function sortcountry(before){
    if(ischeck){
      return before.sort((a,b)=>{
        const totala=Number(a.gold)+Number(a.silver)+Number(a.bronze);
        const totalb=Number(b.gold)+Number(b.silver)+Number(b.bronze);
        return totalb-totala
      })
    }
    else{
      return before.sort((a,b)=>b.gold-a.gold)
    }
  }


  const Clickadd=(e)=>{
    e.preventDefault();
    const has = countrys.findIndex((item) => item.name === name);
    if(has!=-1){alert("이미 존재합니다."); return ;}
    else if(name=="" || name == undefined){alert("국가명을 입력해주세요"); return ;}
    else{const newCountry={
      name: name,
      gold: gold,
      silver: silver,
      bronze: bronze
    };

    const beforesort=[...countrys,newCountry];
    const aftersort=sortcountry(beforesort)
    setCountrys(aftersort); 
  }

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
      const beforesort=[...result,updateCountry];
      const aftersort=sortcountry(beforesort)
      setCountrys(aftersort); 
    }
    setName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  }

  function ClickDelete(name){
    alert("삭제하기가 눌렸습니다")
    const result = countrys.filter((country) => country.name!==name);
    const aftersort=sortcountry(result)
    setCountrys([...aftersort])
  }

  return (
    <>
      <div style={{backgroundColor: 'white', color:'black', padding:"50px", boxShadow:"2px"}}>
        <h1 style={{color:'#99bdd6'}}>2024 파리 올림픽</h1>
        <span><input type="checkbox"
            onChange={(e) => setIscheck(e.target.checked)}
            checked={ischeck}/>메달의 총 개수로 정렬하기</span>
        <form onSubmit={Clickadd} id='addupdate' style={{display:"flex",  gap: "1%", width:"100%"}}>
          <label>국가명<input id="name" value={name} onChange={(e) => setName(e.target.value)} /></label>
          <label>금메달<input id="gold" value={gold} onChange={(e) => setGold(e.target.value)} type="number" min="0"/></label>
          <label>은메달<input id="silver" value={silver} onChange={(e) => setSilver(e.target.value)} type="number" min="0" /></label>
          <label>동메달<input id="bronze" value={bronze} onChange={(e) => setBronze(e.target.value)} type="number" min="0"/></label>
          <input type='submit' form='addupdate' value="국가추가" name='ADD' className='likebutton'/>
          <input type='button' form='addupdate' value="업데이트" name='UPDATE' onClick={ClickUpadte} className='likebutton'/>
          </form>
      </div>

      <div style={{display:"grid", placeItems: "center", width:"100%"}}>
        <div style={{display:"flex",  gap: "5%", backgroundColor:"#99bdd6", width:"100%"}}> 
          <p>국가명</p>
          <p>금메달</p>
          <p>은메달</p>
          <p>동메달</p>
          <p>액션</p>
        </div>
        <div style={{backgroundColor:"#6b96ad", width:"100%", color:"black"}}>
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
              )})
        }
        </div>
      </div>
    </>
  )
}

export default App
