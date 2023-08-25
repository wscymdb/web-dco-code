import styled from 'styled-components'
import { primaryColor, secondColor } from './style/variable'

// styled.div 如果想让渲染的是div那么就styled.div  如果想让渲染的是一个ul那么就是styled.ul
// styled.div div其实就是一个函数  div``这种写法是模版字符串的函数调用

export const AppWrapper = styled.div`
  .section {
    background-color: ${primaryColor};
    .title {
      color: red;
      &:hover {
        background-color: ${secondColor};
      }
    }
  }
`

// 在调用函数的时候可以通过attrs设置一些变量
export const FooterWrapper = styled.div.attrs({
  // sage: '12323',
})`
  /* 外界传入的值是在 props上  如果需要获取 需要写一个回调，styled-components会自动调用这个回调 且将props作为第一个参数传入 */
  .title {
    color: ${(props) => props.color};
    /* 因为props事在函数中 所以返回的时候判断外界有没有传入值 没有的话可以设置默认值 */
    font-size: ${(props) => props.size || '52'}px;
  }
`
