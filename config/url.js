const DEV_URL = 'http://47.242.181.237:3000'
const MOCK_URL = '' // mock数据获取地址
const PRO_URL = 'http://47.242.181.237:3000'
const BASE_URL = process.env.NODE_ENV === 'development' ? DEV_URL : PRO_URL;
export default BASE_URL
