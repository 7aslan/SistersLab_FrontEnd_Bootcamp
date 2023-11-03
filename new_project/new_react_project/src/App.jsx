import FirstComponent from './components/first_component'

import './App.css'

function App() {
  const person ={
    name: "Samet",
    age: 24
  }
  return(
    <div
    style={{
      color:"red"
    }} 
    className='app'>
      <FirstComponent
      
      title = "First Component"
      person = {person}
      hobbies = {["swimming","chess", "music"]}
      componentExample = {<div>Component Example</div>}
      />


    </div>






  )
  


}

export default App
