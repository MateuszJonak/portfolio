import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import { Card } from './components/Card';
import { CircleImage } from './components/CircleImage';
import { SocialList } from './components/SocialList';
import { Page } from './components/Page';
import { Profile } from './components/Profile';

import './Root.scss';
const FULL_NAME = 'Mateusz Jonak';
const JOB_TITLE = 'JavaScript Developer';

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
      <Page title={FULL_NAME} description={JOB_TITLE}>
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
                  <Profile fullName={FULL_NAME} jobTitle={JOB_TITLE} />
                  <SocialList />
                </Card>
              )}
            </Motion>
          </div>
        </div>
      </Page>
    );
  }
}

export default Root;
