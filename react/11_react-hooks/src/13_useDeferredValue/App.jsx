import React, { memo, useDeferredValue, useState } from 'react'
import { users } from './namesArray'
import './style.css'

const App = memo(() => {
  const [infos, setInfos] = useState(users)
  const deferredValue = useDeferredValue(infos)

  function handleInput(e) {
    const target = e.target.value
    const filterNames = users.filter((item) => item.username.includes(target))
    setInfos(filterNames)
  }

  return (
    <div>
      <h1>names</h1>

      <div className="search">
        <input
          type="text"
          placeholder="请输入要搜索的名称🔍"
          onInput={(e) => handleInput(e)}
        />
        {/* <button>search</button> */}
      </div>

      <ul>
        {deferredValue.map((item) => (
          <li key={item.userId}>
            <div className="name">{item.username}</div>
            <div className="info">
              {/* <img src={item.avatar} alt="" /> */}
              <span>
                <i>email:</i> {item.email}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default App
// useDeferredValue作用
// 作用和useTransition作用一样 只不过返回的是传入值的副本
// 案例中 有1万条数据用于展示在页面中 当我们输入时会触发input事件，会从1万条数据中匹配输入的内容
// 会看到这么一个现象 当我们输入的时候，按下键盘，此时界面上会停顿约1s之后才会将内容显示在输入框中  原因是当输入的时候会触发input事件 就会枚举这1万条数据 这就会导致页面出现上述现象 这会让用户感到很不舒服
// 正确做法应该是 先显示输入的内容 在执行input事件  所以可以借助于useDeferredValue 当react发现更新的是useDeferredValue产生的副本时候，就会延迟更新该副本做造成的渲染
