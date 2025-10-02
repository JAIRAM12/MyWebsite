import { Table } from 'antd';

export default function AppTable({ columns, dataSource, pagination, rowKey, ...rest }) {
  return (
      <Table columns={columns} dataSource={dataSource} pagination={pagination} rowKey={rowKey} {...rest} />
  );
}