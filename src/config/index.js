/**
 * Created by whj57 on 2016/10/20.
 */
let config = {};
if (__DEV__) {
  //api地址
  config.apiHost = 'http://123.56.160.179:9091/api';
  //config.apiHost = 'http://localhost:12345/api';
}
else{
  config.apiHost = 'http://111.9.116.140:9091/api';
}

export default config
