import React from 'react';
import { Popconfirm, Table } from 'antd';
import 'antd/dist/antd.css';
// import { ColumnModel } from '../../core/model/ColumnModel';

// const columnModel = ColumnModel;

class TableBody extends React.Component {
  columns = [
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
  state = {
    urls: [],
    dataSource: [],
  };

  componentDidMount(){
    fetch('http://localhost:8080/url/get-all-document')
      .then(res => res.json())
      .then((data) => {
        this.setState({urls: data});
        for (let i = 0; i < data.length; i++) {
          data[i].id = i + 1;
          data[i].key = i + 1;
        }
        this.setState({dataSource: data});
      })
      .catch(console.log)
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  render(){
    return (
      <Table columns={this.columns} dataSource={this.state.dataSource}
             expandable={{
               expandedRowRender: record => (
                 <p style={{margin: 10}}>More information will be here.</p>
               )
             }}/>
    );
  }
}

export default TableBody;
