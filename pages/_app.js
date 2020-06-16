/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';

import '../css/antd.less';

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
    } = this.props;

    return (
      <Component {
        ...pageProps
      }
      />
    );
  }
}

export default MyApp;
