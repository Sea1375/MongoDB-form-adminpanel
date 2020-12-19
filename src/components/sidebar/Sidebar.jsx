import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { PieChartOutlined } from '@ant-design/icons';

const {Sider} = Layout;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({collapsed});
  };

  render(){
    const {collapsed} = this.state;
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="logo"/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined/>}>
            Reports
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
