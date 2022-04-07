先把文件改回 src 再 npm sun serve

props-父传子

$emit-子传父

ref-传参

$bus-兄弟间通信

pubsub-发布与订阅，需要第三方库，pubsub.js

vuex-组件间数据共享
涉及：
$store：{
dispatch
commit
state
}

actions{
函数名(context,value){
context.commit('mutations 中函数名',value)
}
}
mutations{
函数名(state,value){
state 中包含 state 中的对象，可以进行操作
}
}
state{
对象：值
}
getters{
函数名（state）{
对 state 中的对象进行加工
}
}

mapActions,mapMutations,mapState,mapGetter 需要引入 from “vuex”
模块化开发要用到 namespaced:true
mapActions('模块化名称',['action 中的函数名'])
mapMutations('模块化名称',['mutations 中的函数名'])
mapState('模块化名称',['state 中的对象名'])
mapGetters('模块化名称',['action 中的函数名'])
