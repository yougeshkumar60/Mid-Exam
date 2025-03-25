
function CountdownLightSwitch(){
    
const [theme , setTheme] = useState(0)
const [timer,setTimer] =  useState(30)


const toggle = (event) => {
   if(!event.target.checked){
    event.target.class = ""
}
}

const startTimer = () =>{
    setTimeout(() => {
         setTimer(() => {
           setTimer(() => timer - 1)
         },30000)
    })


    const progress = document.getElementById('.progress');
   
      progress.style.width = "100%"
    


}


return (
    <>

  

        
        <div class="container">
  
    <div class="header" style={{ 
    backgroundColor: "var(--container-bg)",
      padding: "2rem",
      borderRadius: "15px",
      boxShadow: 0,
      width: 90,
      maxwidth: 400,
      }}>
   
      <div class="toggle-container" onClick={toggle}>
        <label class="toggle-switch">
          <input type="checkbox" id="themeToggle" />
          <span class="slider" style={{  position: "absolute",
      cursor: "pointer",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "#ccc",
      transition: "backgroundColor 0.4s",
      borderRadius: "26px"}}></span>
        </label>
        <span>Light Mode</span>
      </div>
    </div>

    <div class="timer-section">
      <div class="progress-bar">
        <div class="progress" id="progress"></div>
      </div>
      <div class="timer" id="timerDisplay">30s</div>
      <div class="btn-group">
      <h1 name="counter">{timer}</h1>
        <button id="startButton" onClick={startTimer}>Start Timer</button>
        <button id="resetButton" style="display: none;">Reset Timer</button>
     
      </div>
      <div class="message" id="messageArea"></div>
    </div>
  </div>

    </>
)   

}

export default CountdownLightSwitch