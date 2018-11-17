import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { sampleDataRequest } from '../../redux/actions/sample-action';
import './app.scss';

class App extends Component {

  componentDidMount = () => {
    this.props.sampleDataRequest();
  }

  render() {
    return (
      <div className="App">
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content">
          <Layout>
            <Header title="Title" scroll>
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default connect(null, { sampleDataRequest })(App);
