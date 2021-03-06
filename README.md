# 基于react+antd的后台框架
github地址：[基于react+antd的后台框架](https://github.com/xjc-opensource/react-admin-example)  
预览地址：[预览地址](https://xjc-opensource.github.io/react-admin-example/)

# 1、技术栈
 - react-create-app
 - react
 - react-router
 - react-intl
 - react-load-script
 - axios
 - mockjs
 - antd
 - babel
 - redux / mobx
 - eslint
 - sass

# 2、框架初始化
2.1 安装插件  
``` 
  npm remove -g create-react-app
  npm install -g create-react-app
  create-react-app react-admin-example
  
  npm install --save react-router-dom  
  npm install --save react-load-script  
  npm install --save antd  
  npm install --save node-sass 
  npm install --save-dev babel-plugin-import
  npm install --save-dev @babel/plugin-proposal-decorators
  npm install --save-dev core-decorators 
    
  npm install --save axios  
  npm install --save mockjs 
  npm install --save axios-mock-adapter
  
  npm install --save redux
  npm install --save react-redux
  npm install --save redux-thunk
  
  
  npm install --save react-loadable
  npm install --save nprogress
  npm install --save screenfull
  
  npm install --save react-tinymce
  
  npm install --save element-react 
  npm install --save element-theme-default 
  npm install --save react-hot-loader@next

  npm install --save js-md5
  npm install --save react-intl 
  npm install --save intl  *intl在大部分的『现代』浏览器中是默认自带的,但是Safari和IE11以下的版本没有
  
  ~~npm install --save gsap  二维动画特效~~ 
  ~~npm install --save d3 ~数据驱动图形~
``` 

2.2 自定义配置构建脚本  
``` 
  npm run eject  
  须确保所有文件都已提交git,否则会报错:
     This git repository has untracked files or uncommitted changes
```
     
2.3 调整配置
``` 
  # 发布目录可以非根目录: package.json加 "homepage": "."
  # 按需加载antd样式: .babelrc
  # decorators语法支持: .babelrc
  # 调整打包输出目录(config/paths.js):
    appBuild: resolveApp('build') 
    调整为 
    appBuild: resolveApp('docs')
  # 加入别名: (config/webpack.config.js)
     alias: {
     '@': paths.appSrc,
     }
``` 

# 3、文件目录
```
* docs - 打包文件
* config - 环境配置文件
* public - 公用文件(不参与打包处理,打包前后文件名不变化)
* scripts - 不同环境脚本
* src - 源码文件
    * api - 调用接口地址
    * assets - 公用文件
    * compenents - 公用组件
    * core - 
      * envconfig.js -不同环境下的变量配置
    * demo - 演示例子
    * mock - 模拟接口返回
    * router - 路由
    * utils - 通用工具类
    * views - 页面
    * app.js - 页面入口
    * main.js - 加载入口
* README.md - 项目说明
* README-modify.md - 更新记录
```

# 4、开发配置
3.1 安装nodejs  
3.2 配置nodejs
``` 
  * 自定义存储位置(如:D:\nodejs)  
     npm config set prefix "D:\nodejs\node_global"  
     npm config set cache "D:\nodejs\node_cache"   
     添加操作系统环境变量: 名: NODE_PATH 值: D:\nodejs\node_global\node_modules
  * 配成国内下载地址(解决下载慢):  
     阿里: npm config set registry http://registry.npm.taobao.org
``` 
3.3 相关命令(切换至程序根目录)
``` 
    # 安装组件包 
       npm install
    # 更新组件包 
       npm update
    # 开发运行(serve with hot reload at localhost:3000)
      npm run start
    # 测试运行
      npm run test
    # 发布打包
      npm run build
    
```
3.4. 安装开发IDE - WebStorm(推荐)

# 5、说明
~~~
 # 各组件访问 GlobalEnvParams 取不同环境的配置变量
 # BrowserRouter与HashRouter
    HashRouter: url后面加上#/a/b,因为hash值发生变化,浏览器并不会向服务端发起请求。
    browserRouter： url后面加上/a/b, 但服务器需要把所有路径重定向到首页。
~~~

# 6、docker
   docker run --restart=unless-stopped  --name react-admin-example_mockjs -p 3100:80 -d benxjc/react-admin-example:mockjs
   


# 相关资料
* react：https://zh-hans.reactjs.org/
* react入门教程: http://www.runoob.com/react  
* antd: https://ant.design
* react-devtools: https://github.com/facebook/react-devtools
* react-devtools-setup: https://www.jianshu.com/p/6c1a4d18e002


link:  
   weixin: chinaxjc208
   QQ群: 775310569