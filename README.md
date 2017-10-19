[![gkatemplatew](https://user-images.githubusercontent.com/10385585/28489021-a9cc83aa-6eea-11e7-8c1b-4bb326bb9fe9.png)](https://github.com/joeyguo/gka)

## gka-tpl-percent

<a href="https://www.npmjs.org/package/gka-tpl-percent"><img src="https://img.shields.io/npm/v/gka-tpl-percent.svg?style=flat"></a>
<a href="https://github.com/joeyguo/gka-tpl-percent#license"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>

[gka](https://github.com/joeyguo/gka) 文件生成模板，一键式生成可自适应缩放的 css keyframes 序列帧动画文件，并内置优化。

[在线示例](https://gkajs.github.io/gka-tpl-percent/example/gka.html)

相关文章：[gka 一键制作自适应等比缩放的雪碧图动画](https://github.com/joeyguo/blog/issues/16)

### 内置优化

- 支持雪碧图自适应 ✓
- 开启合图优化 ✓
- 开启相同帧图片复用 ✓

### 说明

该模板适合在动画帧图片间是跳跃性的，如上面 [example](https://gkajs.github.io/gka-tpl-percent/example/gka.html) ，对于图片帧是连续像素的移动的，请使用 [gka-tpl-sprites](https://github.com/gkajs/gka-tpl-sprites)

# Install

```sh
$ sudo npm install -g gka                # install gka
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

