import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Sidebar from '../sidebar';
import TableArea from '../table-area';

class App extends React.Component {
  render(){
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sidebar/>
        <TableArea/>
      </Layout>
    );
  }
}

export default App;
