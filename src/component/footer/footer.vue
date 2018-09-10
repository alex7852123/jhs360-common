<template>
    <footer>
        <div class="footer-top i-container">
            <div class="footer-nav">
                <dl>
                    <dt class="m-b">
                        <a target="_blank" :href="baseUrl+'/account/'">
                            <span class="fa fa-user"></span>
                            <span>我的账户</span>
                        </a>
                    </dt>
                    <dd>
                        <a target="_blank" :href="baseUrl+'/account/cash/recharge/'">资金管理</a>
                    </dd>
                    <dd>
                        <a target="_blank" :href="baseUrl+'/account/invest/current/'">投资管理</a>
                    </dd>
                    <dd>
                        <a target="_blank" :href="baseUrl+'/account/message/'">我的消息</a>
                    </dd>
                </dl>
                <dl>
                    <dt class="m-b">
                        <a target="_blank" :href="baseUrl+'/more/about'">
                            <span class="fa fa-users font-size-16"></span>
                            <span>关于我们</span>
                        </a>
                    </dt>
                    <dd>
                        <a target="_blank" :href="baseUrl+'/more/about/company'">公司简介</a>
                    </dd>
                    <dd>
                        <a target="_blank" :href="baseUrl+'/more/about/team'">管理团队</a>
                    </dd>
                    <dd>
                        <a target="_blank" :href="baseUrl+'/more/about/contact'">联系我们</a>
                    </dd>
                </dl>
                <dl>
                    <dt class="m-b">
                        <a target="_blank" :href="baseUrl+'/more/help/question/'">
                            <span class="fa fa-question-circle"></span>
                            <span>帮助中心</span>
                        </a>
                    </dt>
                    <dd>
                        <a target="_blank" :href="baseUrl+'/more/help/question/'">常见问题</a>
                    </dd>
                    <dd>
                        <a target="_blank" :href="baseUrl+'/more/service/product'">产品介绍</a>
                    </dd>
                    <dd>
                        <a target="_blank" :href="baseUrl+'/more/help/guide/'">操作指南</a>
                    </dd>
                </dl>
                <div class="divider"></div>
            </div>
            <div class="footer-qrcode">
                <div class="left pull-left text-center">
                    <img class="mb-2" :src="baseUrl+'/images/app/qrcode/app-download-qrcode.png'" alt="" />
                    <span>手机客户端下载</span>
                </div>
                <div class="right pull-left text-center">
                    <img class="mb-2" :src="baseUrl+'/images/app/qrcode/wechat-qrcode.png'" alt="" />
                    <span>关注微信服务号</span>
                </div>
                <div class="divider"></div>
            </div>
            <div class="footer-contact">
                <p class="top">客服热线（工作日9:00-17:30）
                    <span class="fa fa-phone"></span>
                </p>
                <p class="bottom">400-969-6599</p>
            </div>
        </div>
        <div class="footer-copyright i-container">
            <span>
                <img :src="baseUrl+'/images/app/trust-01.png'" alt="" />
            </span>
            <span>
                <img :src="baseUrl+'/images/app/trust-02.png'" alt="" />
            </span>
            <span>
                <img :src="baseUrl+'/images/app/trust-03.png'" alt="" />
            </span>
            <span>© 2015 上海蓄积金融信息服务有限公司 All right reserved. 沪ICP备16027229号-1</span>
        </div>
    </footer>
</template>
<script>
import env from '../../env'
export default {
    name: 'm-footer',
    data() {
        return {
            baseUrl: env.base_root_url
        }
    }
}
</script>

<style lang="scss" scoped>
//header nav style
footer {
    border-top: 1px solid #f0f0f0!important;
    width: 100%;
    font-size: 14px;
    .footer-top {
        padding: 40px 0;
        overflow: hidden;
        >div {
            position: relative;
            float: left;
        }
        .footer-nav {
            padding-right: 50px;
            dl {
                margin-right: 20px;
                float: left;
                margin-bottom: 0;
                dt,
                dd {
                    margin-bottom: .8rem;
                }
                dt {
                    font-weight: 700;
                    a {
                        &:hover {
                            text-decoration: none;
                        }
                        .fa {
                            color: #ffc60a;
                            margin-right: .6rem;
                        }
                    }
                }
                dd {
                    font-size: 14px;
                    text-align: right;
                    a {
                        color: #636c72;
                        &:hover {
                            color: #ffc60a;
                        }
                    }
                }
            }
        }
        .footer-qrcode {
            padding-right: 80px;
            .left {
                margin-left: 80px;
                margin-right: 35px;
                width: 100px;
                color: #636c72;
            }
            .right {
                width: 100px;
                color: #636c72;
            }
        }
        .footer-contact {
            width: 377px;
            .top {
                position: relative;
                padding: 10px 0;
                width: 250px;
                color: #999;
                border: 1px solid #ddd;
                text-align: center;
                float: right;
                .fa {
                    position: absolute;
                    bottom: -10px;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    border: 1px solid #dedede;
                    border-radius: 100%;
                    background-color: #fff;
                }
            }
            .bottom {
                color: #ffc60a;
                width: 100%;
                font-size: 34px;
                text-align: right;
                float: right;
                padding-right: 1rem;
            }
        }
        .divider {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto 0;
            width: 1px;
            height: 100px;
            background-color: #f0f0f0;
        }
    }
    .footer-copyright {
        padding: 20px 0;
        text-align: center;
        border-top: 1px solid #f0f0f0;
        span {
            margin-right: 1rem;
        }
    }
}
</style>
