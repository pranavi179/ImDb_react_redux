import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { Switch, Route } from "react-router-dom";
import MovieList from "./movielist";
import MovieDetails from "./MovieDetails";

import Default from "./Default";
import IMDb from './images/IMDb.png';
// import SearchBox from 'antd-search-box';
// import 'antd-search-box/assets/index.css';





const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class View extends React.Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
            selectedKeys={[this.state.current]}
          >
            <Menu.Item key="mail"></Menu.Item>
          
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                

                  {/* <Icon type="home" /> */}
                  <img src={ IMDb } className="App-logo" alt="logo" />
                 h
                    
                  </span>
                  
                  
              }
              

            >
                {/* <div style={{ margin: 32, width: 300 }}>
                        <div>
                        <SearchBox autoFocus />
                        </div>
                    </div> */}
                

          
           
              {/* <Menu.ItemGroup title="Electronics">
                <Menu.Item key="setting:1">
                  <a
                    href="https://ant.design"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    Mobiles{" "}
                  </a>
                  nav 1
                </Menu.Item>
                <Menu.Item key="setting:2">
                  <a
                    href="https://ant.design"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    Tablets{" "}
                  </a>
                  nav 1
                </Menu.Item>
              </Menu.ItemGroup> */}
              <Menu.ItemGroup title="Books">
                <Menu.Item key="setting:3">
                  <a
                    href="https://ant.design"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    Historical{" "}
                  </a>
                  nav 1
                </Menu.Item>
                <Menu.Item key="setting:4">
                  <a
                    href="https://ant.design"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    Science -fiction{" "}
                  </a>
                  nav 1
                </Menu.Item>
              </Menu.ItemGroup>
              {/* </SubMenu> */}
             

              <Menu.ItemGroup title="Sign In /Signup">
                <Menu.Item key="setting:1">
                  <a
                    href="./productlist"
                    target="_self"
                    rel="noopener noreferrer"
                  >
MovieList                  </a>
                  Sign In
                </Menu.Item>
                <Menu.Item key="setting:2">
                  {" "}
                  <a
                    href="/src/components/signinform.js"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    Sign Up{" "}
                  </a>{" "}
                  Sign Up
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

            <Menu.Item key="2">nav 2</Menu.Item>
           
           
             
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>MovieList</Breadcrumb.Item>
            {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
            <Breadcrumb.Item>Movie</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" , float:"left" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                     Hollywood
                    </span>
                  }
                >
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      Bollywood
                    </span>
                  }
                >
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                     Tollywood
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Switch>
                <Route exact path="/movielist" component={MovieList} />
                <Route path="/MovieDetails" component={MovieDetails} />
               
                <Route component={Default} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
         ITs a footer
        </Footer>
      </Layout>
    );
  }
}
