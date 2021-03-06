#!/usr/bin/env node
//向shell说明要用node解释器去执行此文件

// 在最开始注册目录别名 配置在package.json中
require('module-alias/register')
const program = require('commander')
const { createAction, listRepoAction, addRepoAction, removeRepoAction, testAction } = require('@lib/actions')

program
    .version(`v${require('../package').version}`)
    .name('nanami')
    .usage('<command> [options]')
    .description('create project by nanami-cli')
    .option('-f, --force', 'Overwrite target directory if it exists')

// 新建项目
program
    .command('create <project-name>')
    .alias('c')
    .description('create a new project')
    .action(createAction)

// 列出所有模板仓库
program
    .command('list')
    .alias('ls')
    .description('list all boilerplate repositories')
    .action(listRepoAction)

// 添加自定义模板仓库
program
    .command('add <name> <url>')
    .description('add a custom boilerplate repository')
    .action(addRepoAction)

// 删除自定义模板仓库
program
    .command('remove <name>')
    .description('remove a custom boilerplate repository')
    .action(removeRepoAction)

// 测试
program
    .command('test <a> [b...]')
    .description('test,just ignore it')
    .action(testAction)

// 在最后解析输入的命令
program.parse(process.argv)
