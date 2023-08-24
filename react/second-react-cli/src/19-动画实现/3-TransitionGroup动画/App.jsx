import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'
export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      books: [
        {
          id: 1,
          title: '三国演义',
          author: '罗贯中',
        },
        {
          id: 2,
          title: '水浒传',
          author: '施耐庵',
        },
        {
          id: 3,
          title: '红楼梦',
          author: '曹雪芹',
        },
        {
          id: 4,
          title: '西游记',
          author: '吴承恩',
        },
      ],
      id: 5,
    }
  }
  hanldeAdd() {
    const newBooks = [...this.state.books]
    newBooks.push({
      id: this.state.id,
      title: '你查查',
      author: 'r',
    })

    this.setState({
      books: newBooks,
      id: this.state.id + 1,
    })
    // console.log(this.state.books)
  }

  handleRemove(i) {
    const newBooks = [...this.state.books]
    newBooks.splice(i, 1)
    this.setState({
      books: newBooks,
    })
  }
  render() {
    const { books } = this.state
    return (
      <div>
        {/*TransitionGroup 可以直接代替包裹元素 比如下面的li是被ul包裹 ，这时候可以 直接使用TransitionGroup替换ul 但是默认情况下TransitionGroup渲染出来是div 所以可以使用component属性指定渲染出的元素内容  */}
        <TransitionGroup component="ul">
          {books.map((item, i) => (
            <CSSTransition key={item.id} timeout={1000} classNames="r">
              <li>
                {item.title}
                <button onClick={(e) => this.handleRemove(i)}>X</button>{' '}
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <button onClick={(e) => this.hanldeAdd()}>添加</button>
      </div>
    )
  }
}
