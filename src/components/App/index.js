import React, { Component } from 'react';
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  HeaderRow,
  Tab,
  HeaderTabs
} from 'react-mdl';
import Home from '../Home';
import LiveChart from '../LiveChart';
import SearchData from '../SearchData';
import './app.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    }
  }

  changeTab = async (activeTab, e) => {
    e && e.preventDefault();
    await this.setState({ activeTab });
  }

  renderData = () => {
    switch (this.state.activeTab) {
      case 0: return <Home />;
      case 1: return <LiveChart />;
      case 2: return <SearchData />;
      default: return <Home />;
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <Layout fixedHeader fixedTabs>
            <Header>
              <HeaderRow title="Stock Prices" />
              <HeaderTabs ripple activeTab={this.state.activeTab} onChange={tabId => this.changeTab(tabId)}>
                <Tab>Home</Tab>
                <Tab>Live Chart</Tab>
                <Tab>Search Data</Tab>
              </HeaderTabs>
            </Header>
            <Drawer title="Stock Prices">
              <Navigation>
                <a href="#FIXME" onClick={e => this.changeTab(0, e)}>Home</a>
                <a href="#FIXME" onClick={e => this.changeTab(1, e)}>Live Chart</a>
                <a href="#FIXME" onClick={e => this.changeTab(2, e)}>Search Data</a>
              </Navigation>
            </Drawer>
            <Content>
              {this.renderData()}
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
