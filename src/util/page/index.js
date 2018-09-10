import env from '../../env';

export default (env.type === 'web' ? require('./web-page') : require('./wrap-page'))