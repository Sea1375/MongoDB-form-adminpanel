import { Popconfirm } from 'antd';

export const ColumnModel = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: (a, b) => a.email.length - b.email.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'URL',
    dataIndex: 'url',
    sorter: (a, b) => a.url.length - b.url.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Category',
    dataIndex: 'category',
    filters: [
      {
        text: 'Terrorism',
        value: 'Terrorism',
      },
      {
        text: 'Pornography',
        value: 'Pornography',
      },
      {
        text: 'Investment',
        value: 'Investment',
      },
      {
        text: 'Phishing',
        value: 'Phishing',
      },
      {
        text: 'Spam',
        value: 'Spam',
      },
      {
        text: 'RGPD',
        value: 'RGPD',
      },
    ],
    filterMultiple: true,
    onFilter: (value, record) => record.category.indexOf(value) === 0,
  },
  {
    title: 'Details',
    dataIndex: 'details',
  },
  {
    title: 'IP address',
    dataIndex: 'ip',
    sorter: (a, b) => a.ip.length - b.ip.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    render: (text, record) =>
      this.state.dataSource.length >= 1 ? (
        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
          <a>Delete</a>
        </Popconfirm>
      ) : null,
  }
];
