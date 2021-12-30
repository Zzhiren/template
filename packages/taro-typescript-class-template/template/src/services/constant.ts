// 需在小程序开放平台增加白名单
export const BASE_URL_MAP = {
  development: '',
  test: '', // 体验版
  pre: '',  // 预发环境
  production: '', // 生产环境
}

export const BASE_URL = BASE_URL_MAP[process.env.NODE_ENV]
export const MOCK_URL = ''

export const SUCCESS_CODE = 200;
