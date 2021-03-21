
//  知识
// 1. express框架介绍
// 基于Node 快速开发 
// 插件vuex 是基于Vue框架的小插件
// 2. express接口开发->路由
// GET POST DELETE PUT
// 3. GET 
// 3.1 req.query查询字符串 -> ? &    
// 3.2 req.params.id ->  /detail/3
// 4. POST req.body 三种类型的body处理


// 经验
// 1. 接口驱动业务(后端驱动前端)
// 2. 问题: 
// 前后端进度不一致 => 
// 先沟通(按照自己用过的接口的经验) +  最喜欢{res:[]}, 最不喜欢 {a:{b:{}}} => 
// 自己写接口(express)
// 2.1 数组和对象 有序(列表)和无需
// 2.2 不沟通->js功底 
// res提供的: const arr = [{a:[{title:'abc'}],b:[{title:'xyz'}]}]
// js功底
// 列表数组: [{title:'abc'},{title:'xyz'}]
// 3. 自己在真接口开发完毕之前先mock数据
// 4. 在客户端应该做的事儿: 页面  好看  样式  交互 ->不包含复杂的数据处理 -> 中间抽离一层-> 响应拦截器


// 本阶段重点: 
// npm:   npm cache clean --force
// express: use  get post delete put => 写接口
// 数据的处理: 中间件(中间层)
// mock: 前端自己写接口, 等待可爱的后端写完接口后, 直接替换!
