import React, { PureComponent } from 'react'

import { AppWrapper, FooterWrapper } from './style'
import Home from './home'
import { ThemeProvider } from 'styled-components'
export class App extends PureComponent {
  render() {
    return (
      // 样式中返回的是一个div 所以AppWrapper就是一个div 直接替换原本div的包裹即可
      <AppWrapper>
        <div className="section">
          <div className="title">我是标题</div>
          <p className="content">我是内容</p>
        </div>
        {/* 给样式传入参数 */}
        <FooterWrapper color="blue" size="18">
          <div className="title">免责声明</div>
        </FooterWrapper>
        {/* 通过ThemeProvider共享变量 */}
        <ThemeProvider theme={{ color: 'red' }}>
          <Home />
        </ThemeProvider>
      </AppWrapper>
    )
  }
}

export default App
