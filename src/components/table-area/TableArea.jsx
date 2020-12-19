import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import TableBody from '../table';

const {Header, Content, Footer} = Layout;

class TableArea extends React.Component {
  render(){
    return (
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{padding: 0}}/>
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Reports</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <TableBody/>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          ANT REACTJS INTERFACE ©2020 INTERFACE
        </Footer>
      </Layout>
    );
  }
}

export default TableArea;
