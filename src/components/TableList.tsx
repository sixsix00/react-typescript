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

// interface DataProps {
//   datas: DataType[];
// }

const TableList = ({datas}: {datas: DataType[]}) => {
  

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

  return <Table columns={cols} dataSource={datas}></Table>
}

export default TableList