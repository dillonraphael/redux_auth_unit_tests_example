import React, {Component} from 'react';
import { NotificationWrapper } from './style.js';

export default class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      show: false
    }
  }

  componentWillMount() {
      this.setState({
        message: this.props.error.length ? this.props.error : '',
        show: this.props.error.length ? true : false
      })
  
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.error === this.props.error) return;

      this.setState({
        message: nextProps.error.length ? nextProps.error : '',
        show: nextProps.error.length ? nextProps.error : false
      })
  
  }

  render() {
    return (
      <NotificationWrapper status={this.state.show}>
        <div className="notification--error">
          <p>{this.state.message}</p>
        </div>
      </NotificationWrapper>
    )
  }
}
