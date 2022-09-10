# yeb

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 2022/9/8 23:30 李可
1.通过网上查找资料，发现可以用将文件转化为Base64来上传到是数据库中，
 el-upload 中的 http-request 参数可以进行方法覆盖 可以通过提前获取
 上传文件date中的file来进行Base64 转换。
2.关于图片可以重复上传问题 
  重置file就行了
3.官网给的大部分例子都是选图片后就直接上传，:before-upload方法定义上传文件前的钩子，在你选完图片后，就调用这个方法进行图片类型、大小等的判断，但如果你想让图片回显和上传动作分开的话需要设置:auto-upload="false"关闭文件自动上传，但是关闭后发现不会触发before-upload方法，再次但是当你手动上传执行this.$refs.upload.submit();这个方法时，才触发了before-upload上传前的钩子。
这个坑已经有解决方法了：用onChang方法
4.关于上传图片时重复调用方法问题
是应为没有清除FileList缓存

### 2022/9/10 23:30 李可
实现了头像传送功能，及具体思路是将图片加密为base64二进制数据，再后端里解释，将文件图片存储到后端D盘，记录图片位置，下次前端获取时去提取路径下的图片将加密base64二进制数据传输到前端，前端可以直接显示。