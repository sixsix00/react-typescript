import { useState } from 'react'
import './App.css'
import { Button } from 'antd'
import TableList from './components/TableList'

function App() {
  const [count, setCount] = useState(0)

  const addValue = ()=>{
    setCount(count + 1);
  }

  const resetValue = () => {
    setCount(0);
  }

  return (
    <>
      <Button>新增資訊</Button>
      <div className='flex'>
        <div >{count}</div>
        <Button onClick={addValue}>按我吧</Button>
        <Button onClick={resetValue}>Reset</Button>
      </div>
      <TableList></TableList>
    </>
  )
}

export default App
