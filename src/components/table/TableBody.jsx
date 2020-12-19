import React from 'react';
import { Table } from 'antd';
import { ColumnModel } from '../../core/model/ColumnModel';

const columnModel = ColumnModel;

class TableBody extends React.Component {
  state = {
    selectedRowKey: 0, // Check here to configure the default column
    urls: [],
  };

  componentDidMount(){
    fetch('http://localhost:8080/url/get-all-document')
      .then(res => res.json())
      .then((data) => {
        this.setState({urls: data})
      })
      .catch(console.log)
  }

  onSelectChange = selectedRowKey => {
    console.log('selectedRowKeys changed: ', selectedRowKey);
    this.setState({ selectedRowKey });
  };

  render(){
    const { selectedRowKey } = this.state;
    const rowSelection = {
      selectedRowKey,
      onChange: this.onSelectChange,
    };
    return(
      <Table rowSelection={rowSelection} columns={columnModel} dataSource={this.state.urls} />
    );
  }
}

export default TableBody;
