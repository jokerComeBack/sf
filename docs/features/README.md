<template>
<div>
    <h1>实现功能</h1>
    <div></div>
    <ul>
        <li>
            <h3>List模块</h3>
            <h4>增删</h4>
            <ol>
                <li>创建计划</li>
                <li>复制计划</li>
                <li>删除计划</li>
            </ol>
            <h4>筛选</h4>
            <ol>
                <li>手动输入名称模糊查询</li>
                <li>仅我创建</li>
                <li>计划类型</li>
                <li>计划状态</li>
                <li>触达通道</li>
            </ol>
            <h4>排序</h4>
            <ol>
                <li>触达人次/完成率</li>
                <li>累计完成率</li>
            </ol>
        </li>
        <li>
            <h3>Board模块</h3>
            <h4>增删</h4>
            <ol>
                <li>创建计划新增计划</li>
                <li>新增分类</li>
                <li>编辑分类名称</li>
                <li>删除分类</li>
            </ol>
            <h4>筛选</h4>
            <ol>
                <li>手动输入名称模糊查询</li>
            </ol>
        </li>
        <li>
            <h3>Editor模块</h3>
            <h4>创建</h4>
            <ol>
                <li>定时型-单次</li>
                <li>定时型-重复</li>
                <li>触发性-完成A</li>
                <li>触发性-完成A未完成B</li>
            </ol>
            <h4>计划定义</h4>
            <ol>
                <li>设置计划名称</li>
                <li>新建分组和加入分组</li>
            </ol>
            <h4>受众用户设置</h4>
            <ol>
                <li>客户群--全部用户或部分用户</li>
                <li>部分用户支持用户属性及用户行为匹配</li>
                <li>预估客户群人数</li>
            </ol>
            <h4>触发条件设置定时型</h4>
            <ol>
                <li>计划类型--单次或重复</li>
                <li>触发时间--单次型设置具体时间点，重复型设置时间段内每天时间点</li>
                <li>对照组--添加对照组，百分比设置范围为1%至100%</li>
            </ol>
            <h4>触发条件设置触发型</h4>
            <ol>
                <li>计划类型--完成事件A或者完成事件A后，一段事件内未完成事件B</li>
                <li>触达时间--支持完成事件后立即触达或延时触达</li>
                <li>起止事件--配置时间段</li>
                <li>对照组--添加对照组，百分比设置范围为1%至100%</li>
            </ol>
            <h4>触发方式设置</h4>
            <ol>
                <li>
                    <h5>触达通道</h5>
                    <ol>
                        <li>推送(极光推送，个推推送)--支持插入用户属性，点击后打开可选应用，URL或透传</li>
                        <li>短信(极光短信)--设置模板ID，内容变量，测试发送</li>
                        <li>webhook--支持设置静态动态参数</li>
                    </ol>
                </li>
                <li>勿扰设置--时间段内触发不推送</li>
                <li>全局触达设置--是否使用全局触达设置</li>
            </ol>
            <h4>目标设置</h4>
            <ol>
                <li>首要目标，用户在n分钟内完成设置的时间，认为完成目标</li>
                <li>支持设置次要目标</li>
            </ol>
        </li>
        <li>
            <h3>Report</h3>
            <h4>未审批计划可查看计划设置，暂停，审批，删除该计划(根据权限判断可执行的操作)</h4>
            <h4>审批通过的计划</h4>
            <ol>
                <li>table展示计划执行效果</li>
                <li>分析--制表展示计划执行效果</li>
                <li>详情--Editor计划的详情</li>
            </ol>
        </li>
        <li>
            <h3>Set</h3>
            <h4>展示项目设置看板</h4>
            <h3>SetChannel</h3>
            <h4>Push</h4>
            <ol>
                <li>极光推送设置</li>
                <li>个推推送设置</li>
                <li>友盟推送设置</li>
            </ol>
            <h4>短信</h4>
            <ol>
                <li>Sendcloud设置</li>
                <li>极光短信设置</li>
            </ol>
            <h3>SetMsgLimit</h3>
            <ol>
                <li>App push设置</li>
                <li>短信设置</li>
                <li>web设置</li>
            </ol>
        </li>
    </ul>
</div>
</template>

<script>
  export default {
    name: "one"
  }
</script>

<style>

</style>