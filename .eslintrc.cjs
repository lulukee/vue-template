module.exports = {
  // eslintrc.js 文件所在的目录为 root 目录
  // eslint 规则将对这个目录以及该目录下所有文件起作用
  root: true,
  // 让 vue3.2中的这些全局函数能正常使用
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  // eslint 继承别人写好的配置规则, 这些规则是检测语法时的规则的来源
  extends: ['plugin:@typescript-eslint/recommended'],
  // 插件的作用就是对规则进行补充,
  // 如果继承的 @typescript-eslint/recommended里面没有包含与 vue相关的规则
  // 那么就让 ESLint 兼容 vue 的语法
  plugins: ['vue'],
  // 检测 vue 语法 规范的 eslint 解析器
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 这是 '@typescript-eslint/parser' 解析器帮着解析
    ecmaVersion: 2021,
    // 检测 ts 语法规范的 eslint 解析器
    parser: '@typescript-eslint/parser',
  },
  rules: {
    // 生成环境不允许控制台输出, 开发允许控制台输出
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0, // 不允许函数的前面有空格
    'vue/no-multiple-template-root': 0, // vue 可以有唯一的根元素
    '@typescript-eslint/no-empty-function': 0, // 允许出现空函数
    '@typescript-eslint/no-explicit-any': [0], // 项目允许使用any
    '@typescript-eslint/no-var/requires': 0, // 项目中允许使用 require() 语法
    semi: 0, // 关闭语句结尾分号
    'prefer-const': 2, // 开启不变的变量一定要使用 const
    '@typescript-eslint/no-unused-vars': 0, // 允许出现未使用过的变量
    '@typescript-eslint/no-inferrable-types': 0, // 允许变量后面添加类型
  },
};
