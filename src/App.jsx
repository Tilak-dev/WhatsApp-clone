import './App.css'
import LeftContainer from './components/left-body/LeftContainer'
import MiddleContainer from './components/middle-body/MiddleContainer'

function App() {

  return (
    <>
      <div className='flex flex-row font-sans'>
       <LeftContainer />
       <MiddleContainer />
      </div>
     
    </>
  )
}

export default App
