<template>
    <header class="header-nav header-login-nav ">
        <div class="header-nav-wrap i-container">
            <!--<a :href="baseUrl">
                <img :src="baseUrl + '/images/logo.png'" alt="" />
            </a>-->
            <a :href="baseUrl">
                <img :src="baseUrl + '/images/logo-2.png'" alt="" />
                <img :src="baseUrl + '/images/logo-3.gif'" alt="" />
            </a>
            <a :href="baseUrl" class="gohome">
                <span class="txt">进入首页</span>
                <span class="fa fa-home"></span>
            </a>
        </div>
    </header>
</template>
<script>
import env from '../../env'
export default {
    name: 'm-header',
    data() {
        return {
            baseUrl: env.base_root_url
        }
    }
}
</script>

<style lang="scss" scoped>
//header nav style
.header-nav {
    padding: 20px 0;
    .gohome {
        font-size: 16px;
        .txt {
            line-height: 24px;
            float: right;
        }
        .fa {
            font-size: 22px;
            margin-right: 5px;
            float: right;
        }
        a:hover {
            color: #e1b41b;
            text-decoration: none;
        }
    }

    .header-nav-wrap {
        height: 53px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
