<template>
    <div class="p-index">
        <div class="index-navwrap navlist">
            <router-link class="navitem" to="/live">直播</router-link>
            <router-link class="navitem" to="/recommend">推荐</router-link>
            <router-link class="navitem" to="/bangumi">追番</router-link>
        </div>

        <router-view class="page-content"></router-view>
    </div>
</template>

<style lang="scss">
@import "../styles/common.scss";

.index-navwrap {
    background-color: $primary-color;
    height: 130px; /*px*/
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding-top: 60px;/*px*/
}
.navlist {
    display: flex;
}
.navitem {
    display: block;
    flex: 1;
    color: #fff;
    text-decoration: none;
    font-size: 34px;/*px*/
    font-weight: 300;
    line-height: 1;
}
.page-content {
    position: absolute;
    top: 130px; /*px*/
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
