
import { Route, Routes } from 'react-router'

function App() {


  return (
    <>
      
      <Routes>
      <Route path="/" element={<>rafiz index</> } />
      <Route path="/test" element={<>fiz test <p className='text-red-500'>this is styled</p></> } />
    </Routes>

   

    </>
  )
}

export default App
