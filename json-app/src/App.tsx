import './App.css'
import useJsonFetch from './customHooks/useJsonFetch'
import SuccessRequest from './components/SuccessRequest'
import BadRequest from './components/BadRequest'
import LoadingRequest from './components/LoadingRequest'

function App() {
  return (
    <>
      <div className="container">
        <SuccessRequest useJsonFetch={useJsonFetch}/>
        <BadRequest useJsonFetch={useJsonFetch} />
        <LoadingRequest useJsonFetch={useJsonFetch} />
      </div>
    </>
  )
}

export default App
