import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import Card from './components/Card';
import CircleImage from './components/Circle-Image';
import './Root.scss';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };
    this.springOptions = { stiffness: 60, damping: 20 };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: true });
    }, 200);
  }

  render() {
    const style = {
      opacity: this.state.animate ? spring(1, this.springOptions) : 0,
      rotateX: this.state.animate ? spring(0, this.springOptions) : 30,
    };

    return (
      <div className="site-container">
        <div className="card-wrapper">
          <Motion style={style}>
            {({ opacity, rotateX }) => (
              <Card
                style={{
                  opacity,
                  transform: `perspective(1000px) rotateX(${rotateX}deg)`,
                }}>
                <CircleImage src="cv.jpg" />
                <h1>Jonak Mateusz</h1>
                <hr />
                <h3>Full Stack JS Developer</h3>
              </Card>
            )}
          </Motion>
        </div>
      </div>
    );
  }
}

export default Root;
