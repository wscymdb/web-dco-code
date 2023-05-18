const { promisify } = require('util')
// 因为download 不支持promise的写法 所以用promisify将download变成支持promise的写法
const download = promisify(require('download-git-repo'))
const { VUE_REPO } = require('../config/repo')
const { execCommand } = require('../utils/exec-command')
const { compileEjs } = require('../utils/compile-ejs')
const { writeFile } = require('../utils/write-file')
const { program } = require('commander')

// 创建一个vue项目
async function cteateActions(project) {
  try {
    await download(VUE_REPO, project, { clone: true })
    // 1. 让用户手动安装
    // console.log(`
    //   cd ${project}
    //   npm install
    //   npm run dev
    // `)

    // 2. 自动安装并运行
    // 参数一  让node执行的命令 参数二 命令后面跟的参数  参数三 告诉在哪个目录输出
    // 由于window要使用npm.exe 所以这里要区分一下  process.platform可以拿到当前系统
    const commandName = process.platform === 'win32' ? 'npm.exe' : 'npm'
    await execCommand(commandName, ['install'], { cwd: `./${project}` })
    await execCommand(commandName, ['run', 'dev'], { cwd: `./${project}` })
  } catch (error) {
    console.log(`github 连接失败 请稍后重试`)
  }
}

// 添加一个vue组件
// 默认在src/components添加
// 指定目录添加  ymcli addcpn navBar --dest ./src/views/home
async function addComponentAction(cpnname) {
  try {
    const dest = program.opts().dest || './src/components'
    // 1.读取模版文件，修改文件中的数据
    const content = await compileEjs(`component.vue.ejs`, { name: cpnname })
    // 2.将修改的文件写入对应的文件夹
    await writeFile(`${dest}`, `${cpnname}.vue`, content)
    console.log(`创建组件${cpnname}成功`)
  } catch (error) {
    console.log('组建创建失败', error)
  }
}

module.exports = {
  cteateActions,
  addComponentAction,
}
