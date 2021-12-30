module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
    OSS_URL: JSON.stringify(''),
    BUSINESS_URL: JSON.stringify(''),
    GATEWAY: JSON.stringify(''),
  },
  plugins: [
    // mock 代理配置
    ['@tarojs/plugin-mock'],
  ],
  mini: {},
  h5: {
    esnextModules: ['taro-ui'],
  },
};
