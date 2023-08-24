import React, { PureComponent } from 'react'
import Product from './Product'
import themeContext from './context/theme_context'

/**
 * 案例需求
 * 父组件提供一个主题的配置，子组件拿到配置信息
 * 如果每个组件都是用themeContext.Constomer来获取，那么代码很冗余
 * 现在是用高阶组件，给子组件注入父组件提供的配置，子组件直接使用即可
 */
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <themeContext.Provider value={{ color: 'red', size: 'small' }}>
          <Product />
        </themeContext.Provider>
      </div>
    )
  }
}
