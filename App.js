import React from 'react';
import Blog from './components/blog/Blog';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import { Row, Col } from "react-materialize";
class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Row>
          <Col m={3}>
            <Profile />
          </Col>
          <Col m={9}>
            <Blog />
          </Col>
        </Row>
      </div>
    )
  }
}
export default App;
