import React from 'react';
import WidgetLoadingFail from './WidgetLoadingFail';

export default class ErorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    //console.log(this.state);
    return this.state.hasError ? <WidgetLoadingFail /> : this.props.children;
  }
}
