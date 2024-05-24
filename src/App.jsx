import './App.css'
import LeftContainer from './components/left-body/LeftContainer'
import MiddleContainer from './components/middle-body/MiddleContainer'
import RightBodyContainer from './components/right-body/RightBodyContainer'

function App() {

  return (
    <>
      <div className='flex flex-row font-sans'>
       <LeftContainer />
       <MiddleContainer />
       <RightBodyContainer />
      </div>
     
    </>
  )
}

export default App
