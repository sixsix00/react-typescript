import type { TableProps } from 'antd';
import { Table, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

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

const cols: TableProps<DataType>['columns'] = [
    {
      title: 'District Code',
      dataIndex: 'districtCode',
      key: 'districtCode',
    },
    {
      title: 'Alias',
      dataIndex: 'alias',
      key: 'alias',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
    },
    {
      title: 'Edited',
      dataIndex: 'edited',
      key: 'edited',
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
                    return <Button  shape="circle" icon={<DeleteOutlined />} />
                }
                if(v === 'edit') {
                    return <Button shape="circle" icon={<EditOutlined />} />
                }

            })
          }
        </Space>
      ),
    },
]

export default () => <Table columns={cols} dataSource={datas}></Table>