import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
 
  return ( 
    <>
      <Button variant='primary' text='Share' size='md' onClick={()=>console.log("onClick prop")} startIcon={<PlusIcon size='md'/>}/>
      <Button variant='secondary' text='Add Content' size='md' onClick={()=>console.log("onClick prop")}/>
    </>
  )
}

export default App
