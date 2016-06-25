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

## nyc

使用nyc生成覆盖率

```sh
npm i nyc --save-dev
```



```sh
npm run cover                                                          
```  

```sh                                                                       
> ava-test@1.0.0 cover E:\demos\ava-test                                 
> nyc npm run test                                                       
                                                                         
                                                                         
> ava-test@1.0.0 test E:\demos\ava-test                                  
> ava --verbose                                                          
                                                                         
                                                                         
  √ index » Index应该是一个方法                                                 
  √ index » Index()应该返回一个字符串                                             
  √ index » Index("你好")应该等于你好                                            
  √ Item » 应该返回一个div元素                                                   
  √ Item » .title                                                        
  √ Item » .price                                                        
  √ Item » .desc                                                         
  √ Item » a                                                             
  √ Item » click                                                         
                                                                         
  9 tests passed [18:13:53]                                              
                                                                         
----------|----------|----------|----------|----------|----------------| 
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines | 
----------|----------|----------|----------|----------|----------------| 
----------|----------|----------|----------|----------|----------------| 
All files |      100 |      100 |      100 |      100 |                | 
----------|----------|----------|----------|----------|----------------| 
                                                                         
```                                                                         

