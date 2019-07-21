<template>
<div>
    <h1>代码框架</h1>
    <h2>model细分</h2>
    <ul>
        <li>global-全局数据</li>
        <li>password-登录模块</li>
        <li>editor-编辑模块</li>
        <li>list-列表模块</li>
        <li>board-看板模块</li>
        <li>channel-项目设置</li>
    </ul>
    <h2>路由细分</h2>
    <ul>
        <li>根    root</li>
        <li>登录页 Login</li>
        <li>列表页 List</li>
        <li>看板页 Board</li>
        <li>详情页 Report</li>
        <li>编辑页 Editor</li>
        <li>设置页 Set</li>
    </ul>
   
</div>
</template>

<script>
  export default {
    name: "one",
    data(){
      return{
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  }
</script>

<style>

</style>