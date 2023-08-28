import React, { PureComponent } from 'react'

function enhancedUserInfo(OriginCompoent) {
  class NewComponent extends PureComponent {
    constructor() {
      super()
      this.state = {
        userInfo: {
          name: 'zs',
          age: 19,
        },
      }
    }

    render() {
      return <OriginCompoent {...this.state.userInfo} {...this.props} />
    }
  }
  return NewComponent
}
export default enhancedUserInfo
