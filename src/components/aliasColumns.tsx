import type { TableProps } from 'antd';
import { Space, Button, Input, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, CalendarOutlined, FieldTimeOutlined, UserOutlined } from '@ant-design/icons';
import type { AliasType } from "../type/AliasType";
import datex from 'datex.js';


const aliasColumns = ({delData, putData}) => {

	const editData = (url:string, id:string, record: AliasType) => {
		Modal.warning({
			title: '修改資料',
			content: <Space direction="vertical">
									District Code
									<Input showCount maxLength={20} value={record.districtCode} disabled/>
									Alias
									<Input showCount maxLength={20} defaultValue={record.alias} onChange={(e)=> {
										record.alias = e.target.value
										record.edited.date = datex(new Date()).format("YYYY/MM/DD")
										record.edited.time = datex(new Date()).format("HH:mm:ss")

										}} />
							</Space>,
			onOk: ()=> putData(url, id, record)
		});
	}
  const cols: TableProps<AliasType>['columns'] = [
      {
        title: 'District Code',
        dataIndex: 'districtCode',
        key: 'districtCode',
				sorter: (a, b) => a.districtCode.length - b.districtCode.length,
      },
      {
        title: 'Alias',
        dataIndex: 'alias',
        key: 'alias',
				sorter: (a, b) => a.alias.length - b.alias.length,
      },
      {
        title: 'Created',
        dataIndex: 'created',
        key: 'created',
				sorter: (a, b) => new Date(a.created.date + " " +a.created.time).getTime() - new Date(b.created.date + " " +b.created.time).getTime(),
				render: (created) =>(
					<Space direction="vertical">
						<span key={created.date}><CalendarOutlined /> {created.date}</span>
						<span key={created.time}><FieldTimeOutlined /> {created.time}</span>
						<span key={created.createdUser}><UserOutlined /> {created.createdUser}</span>
					</Space>
					// <Space direction="vertical">
					// 	{
					// 		Object.values(created).join(', ')
					// 	}
					// </Space>
				),
      },
      {
        title: 'Edited',
        dataIndex: 'edited',
        key: 'edited',
				sorter: (a, b) => new Date(a.edited.date + " " +a.edited.time).getTime() - new Date(b.edited.date + " " +b.edited.time).getTime(),
				render: (edited) =>(
					// console.log(created)
					<Space direction="vertical">
						<span key={edited.date}><CalendarOutlined /> {edited.date}</span>
						<span key={edited.time}><FieldTimeOutlined /> {edited.time}</span>
					</Space>
					// <Space direction="vertical">
					// 	{
					// 		Object.values(created).join(', ')
					// 	}
					// </Space>
				),
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: (_, record) => (
          <Space size="middle">
						{
              record.actions.map((v) => {
                  if(v === 'delete') {
                      return <Button key={record.id} onClick={()=>delData("alias", record.id)} shape="circle" icon={<DeleteOutlined />} />
                  }
                  if(v === 'edit') {
										// console.log(record);
                      return <Button key={record.id} shape="circle" onClick={()=>editData("alias", record.id, record)} icon={<EditOutlined />} />
                  }

              })
            }
          </Space>
        ),
      },
  ]
	return {
		cols
	}
}

export default aliasColumns