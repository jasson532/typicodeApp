import type { InputRef } from 'antd';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './DataTable.scss';
import { columnsPosts } from '../../constantas/datatable.constants';
import { IPosts } from '../../services/posts/posts.type';


type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const DataTableComponent = (data: IPosts[]): JSX.Element => {
  console.log('data IN DATATABLE ', data);
  const [dataSource, setDataSource] = useState<IPosts[]>(data)
const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string, render?: any })[] = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '30%',
    editable: true,
  },
  {
    title: 'age',
    dataIndex: 'age',
  },
  {
    title: 'address',
    dataIndex: 'address',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    render: (record: any) =>
      dataSource.length >= 1 ? (
        <Popconfirm title="Sure to delete?" onConfirm={() => {}}>
          <a>Delete</a>
        </Popconfirm>
      ) : null,
  },
];

  const columns = columnsPosts.map(col => {
    return {
      ...col,
      onCell: (record: IPosts) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  const formatData = (obj: Record<string, any>): any[] => {
    return Object.values(obj);
  };

  return (
    <div>
      <Table
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={formatData(data)}
        columns={columns as ColumnTypes}
      />
    </div>
  );
};

export default DataTableComponent;
