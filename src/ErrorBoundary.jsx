import React from 'react';
import ReactDOM from 'react-dom/client'

export default class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      errorMessage: "",
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
    this.setState({
      errorMessage: error.message
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ color: 'red' }}>
          <h1>Hello World, I'm Error Boundary</h1>
          <h2>{this.state.errorMessage} !!!</h2>
        </div>
      )
    }
    return (this.props.children)
  }
}
