#!/usr/bin/env node
// commander包 可以帮助我们解析命令行的参数
const { program } = require('commander')
const helpOptions = require('./core/help-options')
const { cteateActions, addComponentAction } = require('./core/actions')

// 1. 配置所有options
helpOptions(program)

// 2.增加具体的功能操作
// 2.1.生成vue模版项目
program
  .command('create <project> [...others]') // 创建的命令
  .description(
    'cteate a vue project into a folder,eg: ymcli create demo_project'
  ) // 命令的描述
  .action(cteateActions) // 使用该命令执行的操作

// 2.2.添加一个vue组件
program
  .command('addcpn <cpnname>')
  .description(
    'add a vue component into a folder, 默认在./src/components下添加 eg: ymcli addcpn  NavBar; 指定添加目录 eg： ymcli addcpn navBar --dest ./src/views/home'
  )
  .action(addComponentAction)

// 让commander解析process.argv参数
// process.argv 可以拿到命令行中输入的命令参数
program.parse(process.argv)

// 获取而外传递的参数
// console.log(program.opts().dest)
