const environment = {};
export function enabledModel(type, env) {
  if (type === 'web' && env === 'development') {
    Object.assign(environment, require('./web-dev'));
  } else if (type === 'web' && env === 'production') {
    Object.assign(environment, require('./web-prod'));
  }else if (type === 'wrap' && env === 'development') {
    Object.assign(environment, require('./wrap-dev'));
  } else if (type === 'wrap' && env === 'production') {
    Object.assign(environment, require('./wrap-prod'));
  }
  return environment;
}

export default environment;