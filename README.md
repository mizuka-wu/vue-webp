# vue-webp
> A plugin help you replace .png .jpg to .webp

#### How to use
```npm i vue2-webp --save
// in your main.js
import webp from 'vue2-webp'
Vue.use(webp)

// where you need to replace
<img v-webp="src" />
```

#### How it works
In construct it will check the browser, and if browser support use webp, it will replace .png or .jpg to .webp

#### To do
1. support mobile
2. test webp file before replace
3. more config
