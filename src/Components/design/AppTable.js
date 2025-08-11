import { Table } from 'antd';
import './CSS components/GlassTable.css'

export default function AppTable({ columns, dataSource,pagination, ...rest }) {
  return (
    // <div className="glass-container"> //Table design isn't fulled completed
      <Table columns={columns} dataSource={dataSource} pagination={pagination} className="glass-container" {...rest} />
    // </div>
  );
}