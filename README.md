# ava test


> Test-driven development


## ava 内置支持es2015的测试（只是测试文件，如果你要测试的源文件是es2015写的你需要配置babel）

```js
... package.json
{
"ava": {
        "require": [
            "babel-register"
        ]
    },
    "babel": {
        "presets": [
            "es2015"
        ]
    }
}
...    

```


## npm scripts


> 执行测试

```sh
npm test 
```

> 开启监控模式 

```sh
npm run test:watch
```


## react

- http://airbnb.io/enzyme/
- http://reactjs.org


> 安装依赖解析jsx语法

```sh
npm i --save-dev enzyme react-addons-test-utils  react-dom
```

ava不支持浏览器环境测试，所以还要安装jsdom，如果要模拟点击事件 可以使用sinon

```sh
npm i jsdom sinon -D
```

