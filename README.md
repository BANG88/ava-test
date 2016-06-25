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