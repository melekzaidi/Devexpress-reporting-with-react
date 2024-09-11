import { useState } from 'react'

import './App.css'
import ReportComponent from './Reporting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <ReportComponent src="http://localhost:5000/" reportName='Report1'/>    </>
  )
}

export default App
