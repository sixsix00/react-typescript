import './App.css'
import { Button, Tabs, Table, Modal, Space, Input } from 'antd'
import type { TabsProps } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import datex from 'datex.js';
import {queryData} from "./data/useData"
import aliasColumns from "./components/aliasColumns"
import { useState, useEffect } from "react"


function App() {
  const { dataSource, setDataSource }= queryData("alias")
	const { cols } = aliasColumns();
	const [isModalOpen, setIsModalOpen] = useState([false, false]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Alias',
      children: <Table columns={cols} dataSource={dataSource}></Table>,
    },
    {
      key: '2',
      label: 'District',
      children: 'Content of Tab Pane 2',
    },
  ];

	const toggleModal = (idx: number, target: boolean) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

	const [addObj, setAddObj] = useState({districtCode:"", alias:""});
	const addChgData = (v) => {
		console.log("~~~~")
		setAddObj((prev)=> ({
			...prev,
			...v
		}))
	}

	const addDataSource = () => {
		setDataSource((prev)=> [
			...prev,
			{
				key: uuidv4(),
        districtCode: addObj.districtCode,
        alias: addObj.alias,
        created: {
          date: datex(new Date()).format("YYYY/MM/DD"),
          time: datex(new Date()).format("HH:mm:ss"),
					createdUser: "Lucas"
        },
        edited: { "date": "2024-02-15", "time": "5:25:20" },
        actions: ["edit", "delete"]
			}
		])

		toggleModal(0, false)
	}


  return (
    <>
      <Button onClick={() => toggleModal(0, true)}>新增資訊</Button>
			<Modal
        title="新增資訊"
        open={isModalOpen[0]}
        onOk={() => addDataSource()}
        onCancel={() => toggleModal(0, false)}
				okText="新增"
        cancelText="取消"
      >
        <Space direction="vertical">
					District Code
					<Input showCount maxLength={20} onChange={(e)=>addChgData({districtCode: e.target.value})} />
					Alias
					<Input showCount maxLength={20} onChange={(e)=>addChgData({alias: e.target.value})}/>
				</Space>
      </Modal>
      <Tabs centered={true} defaultActiveKey="1" items={items} />
    </>
  )
}

export default App
