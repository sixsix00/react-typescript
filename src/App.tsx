import './App.css'
import { Button, Tabs, Table, Modal, Space, Input } from 'antd'
import type { TabsProps } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import datex from 'datex.js';
import repo from "./data/useData"
import aliasColumns from "./components/aliasColumns"
import { useState } from "react"


function App() {
	const r = repo();
  const { queryData, addData }= r;
	const { dataSource } = queryData("alias")
	const { cols } = aliasColumns(r);
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
		setAddObj((prev)=> ({
			...prev,
			...v
		}))
	}

	const addDataSource = () => {
		addData("alias", {
			id: uuidv4(),
			districtCode: addObj.districtCode,
			alias: addObj.alias,
			created: {
				date: datex(new Date()).format("YYYY/MM/DD"),
				time: datex(new Date()).format("HH:mm:ss"),
				createdUser: "Lucas"
			},
			edited: { date: datex(new Date()).format("YYYY/MM/DD"), time: datex(new Date()).format("HH:mm:ss") },
			actions: ["edit", "delete"]
		})

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
