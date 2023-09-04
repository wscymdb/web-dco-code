import React, { PureComponent } from 'react'
import withRouter from '../hoc/withRouter'

export class User extends PureComponent {
  componentDidMount() {
    const { location, query } = this.props.router
    console.log(location, query)
  }
  render() {
    return <div>User</div>
  }
}

export default withRouter(User)
