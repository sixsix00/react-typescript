import type { TableProps } from 'antd';
import { Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined, CalendarOutlined, FieldTimeOutlined, UserOutlined } from '@ant-design/icons';

import type { AliasType } from "../type/AliasType";
const aliasColumns = () => {
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
        render: (_, { actions }) => (
          <Space size="middle">
						{
              actions.map((v) => {
                  if(v === 'delete') {
                      return <Button key="delete" shape="circle" icon={<DeleteOutlined />} />
                  }
                  if(v === 'edit') {
                      return <Button key="edit" shape="circle" icon={<EditOutlined />} />
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