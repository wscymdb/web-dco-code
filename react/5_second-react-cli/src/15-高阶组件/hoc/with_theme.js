import themeContext from '../context/theme_context'

function withTheme(OriginCompoent) {
  return (props) => {
    return (
      <themeContext.Consumer>
        {(value) => <OriginCompoent {...value} {...props} />}
      </themeContext.Consumer>
    )
  }
}

export default withTheme
