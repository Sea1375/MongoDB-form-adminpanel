import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { ColumnModel } from '../../core/model/ColumnModel';
// import { ExpandedRowRender } from '../../core/mock/ExpandedRowRender';
const columnModel = ColumnModel;

class TableBody extends React.Component {
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

  render(){
    return (
      <Table columns={columnModel} dataSource={this.state.dataSource}
             expandable={{
               expandedRowRender: record => (
                 <p style={{margin: 10}}>More information will be here.</p>
               )
             }}/>
    );
  }
}

export default TableBody;
