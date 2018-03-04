[![gkatemplatew](https://user-images.githubusercontent.com/10385585/28489021-a9cc83aa-6eea-11e7-8c1b-4bb326bb9fe9.png)](https://github.com/joeyguo/gka)

## gka-tpl-percent

<a href="https://www.npmjs.org/package/gka-tpl-percent"><img src="https://img.shields.io/npm/v/gka-tpl-percent.svg?style=flat"></a>
<a href="https://github.com/joeyguo/gka-tpl-percent#license"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>

[gka](https://github.com/joeyguo/gka) 文件生成模板，一键式图片资源优化，生成序列帧动画文件。

- [示例预览](https://gkajs.github.io/gka-tpl-percent/example/gka.html)
- [示例代码](https://github.com/gkajs/gka-tpl-percent/tree/master/example)

相关文章：[gka 一键制作自适应等比缩放的雪碧图动画](https://github.com/joeyguo/blog/issues/16)

- 输出 css 百分比动画文件
- 使用该方案支持 `移动端多倍图适配`✓ `自适应缩放雪碧图`✓ 
- 结合 -u 支持 `相同帧图片复用`✓ (可选) 
- 默认开启 `开启合图优化`✓

### 说明

该模板适合在动画帧图片间是跳跃性的，如上面 [example](https://gkajs.github.io/gka-tpl-percent/example/gka.html) ，对于图片帧前后是连续像素位移的，请使用canvas、studiojs模板进行处理支持自适应，无需支持自适应可使用css模板结合 -s 实现雪碧图动画。

# Install

```sh
$ npm install -g gka                # install gka
```

# Usage

```sh
$ gka <dir> -t percent [options]
```

# Example

```sh
$ gka E:\gka-test\img -t percent
```

<table>
    <thead>
        <tr><th>Before</th><th>After</th></tr>
    </thead>
    <tbody>
        <tr>
            <td><pre><code>
./img
├── hello-01.png
├── hello-02.png
├── hello-03.png
├── hello-04.png
├── hello-05.png
└── ...
</code></pre></td>
<td><pre><code>
./gka-img
└── gka.html
└── gka.css
└── img
    └── gka_sprites.png
</code></pre></td>
        </tr>
    </tbody>
</table>

# Use GKA

[https://github.com/gkajs/gka](https://github.com/gkajs/gka)

