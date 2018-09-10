export default {
    type: 'wechat',
    env: 'production',
    version: '2.0.0.0',
    base_root_url: 'http://m.jhs360.com',
    baidu_id: 'a27f63ee56a91d993db4f964992d0e6c',
    domain: 'jhs360.com',
    apis: {
        main: {
            url: 'http://180.168.159.59:9101/f/api',
            apiKey: 'hsbankWebsite',
            secretKey: 'CE0E77B2104D7CA4886AB49BA9D00E6B'
        },
        anniversary:{
            url: 'http://120.76.240.226:7006/anniversary',
            apiKey: 'hsbankActivity',
            secretKey: '47B7E409A386F85E8559A27489F17349'
        }
    }
}