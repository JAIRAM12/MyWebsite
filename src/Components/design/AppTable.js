import { Table } from 'antd';
import './CSS components/GlassTable.css'

export default function AppTable({ columns, dataSource, ...rest }) {
  return (
    <div className="glass-container">
      <Table columns={columns} dataSource={dataSource} pagination={true} {...rest} />
    </div>
  );
}