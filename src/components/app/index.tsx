import * as React from 'react';

export default class App extends React.Component {
  public render() {
    return (
      <div>
        {/* include app level components like app-header */}
        {this.props.children}
      </div>
    );
  }
}