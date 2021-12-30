import { resolve } from 'path';

const config = {
  projectName: '<%=projectName%>',
  date: '<%=date%>',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
    SUCCESS_CODE: 200
  },
  copy: {
    patterns: genCopyPatterns(),
    options: {},
  },
  // 全局注入 scss 文件
  sass: {
    resource: ['src/styles/index.scss'],
    projectDirectory: resolve(__dirname, '..'),
    data: `
      $nav-height: 48px;
      $main-color: #FED736;
      $main-pdlr: 36px;
      $main-bdr: 10px;
      $main-bg: #F8F8F8;
      $main-mt: 36px;
      $main-mb: 36px;
      $main-mr: 28px;
    `,
  },
  alias: {
    '@': resolve(__dirname, '..', 'src'),
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    webpackChain(chain) {
      // eslint-disable-next-line no-shadow
      const config = chain.optimization.get('splitChunks');
      chain.optimization.splitChunks({
        ...config,
        cacheGroups: {
          ...config.cacheGroups,
        },
      });
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  weapp: {
    compile: {
      // exclude: [resolve(__dirname, '..', 'src/tencent-webim/tim-wx.js')],
    },
  },
};

/**
 * @desc 需要拷贝的文件
 * @returns
 */
function genCopyPatterns() {
  const patterns = [
    // { from: 'src/components/vant-weapp/dist/wxs', to: 'dist/components/vant-weapp/dist/wxs' },
    // { from: 'src/components/vant-weapp/dist/common/style', to: 'dist/components/vant-weapp/dist/common/style' },
    // { from: 'src/components/vant-weapp/dist/common/index.wxss', to: 'dist/components/vant-weapp/dist/common/index.wxss' },
    // { from: 'src/components/vant-weapp/dist/calendar/index.wxs', to: 'dist/components/vant-weapp/dist/calendar/index.wxs' },
    // { from: 'src/components/vant-weapp/dist/calendar/utils.wxs', to: 'dist/components/vant-weapp/dist/calendar/utils.wxs' },
    // { from: 'src/components/vant-weapp/dist/calendar/calendar.wxml', to: 'dist/components/vant-weapp/dist/calendar/calendar.wxml' },
    // { from: 'src/components/vant-weapp/dist/calendar/components/month/index.wxs', to: 'dist/components/vant-weapp/dist/calendar/components/month/index.wxs' },
    // { from: 'src/components/vant-weapp/dist/field/index.wxml', to: 'dist/components/vant-weapp/dist/field/index.wxml' },
    // { from: 'src/components/vant-weapp/dist/field/index.wxs', to: 'dist/components/vant-weapp/dist/field/index.wxs' },
  ];

  // const prodPatterns = [{ from: './prod.project.config.json', to: 'dist/project.config.json' }];
  // const devPatterns = [];
  // const testPatterns = [];
  // if (process.env.NODE_ENV === 'production') {
  //   // 生产环境
  //   return [...patterns, ...prodPatterns];
  // } else if (process.env.NODE_ENV === 'test') {
  //   // 测试环境
  //   return [...patterns, ...testPatterns];
  // } else if (process.env.NODE_ENV === 'development') {
  //   // 开发环境
  //   return [...patterns, ...devPatterns];
  // }

  return patterns;
}

export default function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  } else if (process.env.NODE_ENV === 'test') {
    return merge({}, config, require('./test'));
  } else if (process.env.NODE_ENV === 'pre') {
    return merge({}, config, require('./pre'));
  }
  return merge({}, config, require('./prod'));
}
