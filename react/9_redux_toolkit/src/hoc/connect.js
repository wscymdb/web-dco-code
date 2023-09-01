import { PureComponent } from 'react'
// import store from '../store'
import { storeContext } from './storeContext'

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrapperComponent) {
    class NewComponet extends PureComponent {
      constructor(props, context) {
        super(props)
        this.state = context.getState()
      }

      componentDidMount() {
        this.context.subscribe(() => {
          this.setState(this.context.getState())
        })
      }

      render() {
        const stateObj = mapStateToProps
          ? mapStateToProps(this.context.getState())
          : {}
        const dispatchObj = mapDispatchToProps
          ? mapDispatchToProps(this.context.dispatch)
          : {}
        return <WrapperComponent {...this.props} {...stateObj} />
      }
    }

    NewComponet.contextType = storeContext
    return NewComponet
  }
}
