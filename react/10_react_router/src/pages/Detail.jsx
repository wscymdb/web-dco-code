import React, { PureComponent } from 'react'
import withRouter from '../hoc/withRouter'

export class Detail extends PureComponent {
  componentDidMount() {
    console.log(this.props.router.params)
  }
  render() {
    return (
      <div>
        <h1>detail</h1>
        <div>params:{this.props.router.params.id}</div>
      </div>
    )
  }
}

export default withRouter(Detail)
