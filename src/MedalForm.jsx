
function MedalForm(){
  return(
    <form onSubmit={Clickadd} id='addupdate' style={{display:"flex",  gap: "1%", width:"100%"}}>
      <label>국가명<input id="name" value={name} onChange={(e) => setName(e.target.value)} /></label>
      <label>금메달<input id="gold" value={gold} onChange={(e) => setGold(+e.target.value)} type="number" min="0"/></label>
      <label>은메달<input id="silver" value={silver} onChange={(e) => setSilver(+e.target.value)} type="number" min="0" /></label>
      <label>동메달<input id="bronze" value={bronze} onChange={(e) => setBronze(+e.target.value)} type="number" min="0"/></label>
      <input type='submit' form='addupdate' value="국가추가" name='ADD' className='likebutton'/>
      <input type='button' form='addupdate' value="업데이트" name='UPDATE' onClick={ClickUpadte} className='likebutton'/>
    </form>);  
}
