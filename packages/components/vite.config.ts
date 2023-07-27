import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
// @ts-ignore
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
  build: {
    //打包文件目录
    outDir: "es",
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../uli-comp/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../uli-comp/lib",
        },
      ],
      
    },
    lib: {
      entry: "./index.ts",
    },
    cssCodeSplit: true,//是否将CSS拆分为更小的块并独立加载
    cssTarget: 'chrome61' //防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
    
  },
  plugins: [vue(),dts({
    entryRoot: "./src",
    outputDir: ["../uli-comp/es/src", "../uli-comp/lib/src"],
    //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
    tsConfigFilePath: "../../tsconfig.json",
  }), DefineOptions()],
  esbuild:{
    drop: ['console','debugger'], // 删除 所有的console 和 debugger 包括console.log、console.warn、console.error等。
    //如下配置只删除 debugger console.log  
    // pure: ['console.log'], // 删除 console.log
    // drop: ['debugger'], // 删除 debugger
}
});
