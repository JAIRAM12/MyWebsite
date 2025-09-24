import { Table } from 'antd';

export default function AppTable({ columns, dataSource,pagination, ...rest }) {
  return (
      <Table columns={columns} dataSource={dataSource} pagination={pagination} {...rest} />
  );
}