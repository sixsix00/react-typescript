import { useState } from 'react'
import './App.css'
import { Button, Tabs, Space } from 'antd'
import TableList from './components/TableList'
import type { TabsProps } from 'antd';
interface DataType {
  key: number;
  districtCode: string;
  alias: string;
  created: string;
  edited: string;
  actions: string[];
}
const datas: DataType[] = [
  {
      key: 1,
      districtCode: "7777",
      alias: "555",
      created: "2024-02-15",
      edited: "2024-02-15",
      actions: ["edit","delete"],
  },
  {
      key: 2,
      districtCode: "7777",
      alias: "555",
      created: "2024-02-15",
      edited: "2024-02-15",
      actions: ["edit","delete"],
  },
  {
      key: 3,
      districtCode: "7777",
      alias: "555",
      created: "2024-02-15",
      edited: "2024-02-15",
      actions: ["edit","delete"],
  }
]

function App() {
  const [count, setCount] = useState(0)

  const addValue = ()=>{
    setCount(count + 1);
  }

  const resetValue = () => {
    setCount(0);
  }

  const onChange = (key: string) => {
    console.log(key);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Alias',
      children: <TableList datas={datas}></TableList>,
    },
    {
      key: '2',
      label: 'District',
      children: 'Content of Tab Pane 2',
    },
  ];

  return (
    <>
      <Button>新增資訊</Button>
      <div className='flex'>
        <div >{count}</div>
        <Button onClick={addValue}>按我吧</Button>
        <Button onClick={resetValue}>Reset</Button>
      </div>
      <Tabs centered={true} defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default App
