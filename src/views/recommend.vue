<template>
    <div class="p-recommend">
        <div class="title-ctnr f-clearfix">
            <div class="f-left title__name">
                <span>综合</span>
            </div>
            <div class="f-right">
                <span class="title__icon iconfont icon-paixingbang"></span>
                <span class="title__icon iconfont icon-tianjiashuqian"></span>
            </div>
        </div>
        <div class="block-ctnr">
            <div class="block-card" v-for="item in (0,8)">
                <div class="block-card__cover">
                    <img src="../assets/leimu.jpg" alt="">
                </div>
                <div class="block-card__content">
                    <div class="block-card__title">十大质量最佳STEAM免费游戏</div>
                    <div class="block-card__infos f-right">
                        <span class="block-card__category">单机游戏 · 单机联机</span>
                        <span class="block-card__op iconfont icon-gengduo"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../styles/common.scss";
.p-recommend {
    .title-ctnr {
        color: #b0b0b0;
        padding: 20px 30px;
        border-bottom: 1px solid #e2e2e2;/*px*/
    }
    .title__name {
        font-size: 30px; /*px*/
        line-height: 2;
    }
    .title__icon {
        font-size: 42px;
        color: $primary-color;
        margin-right: 20px;
    }
    .block-ctnr {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 32px;
    }
    .block-card {
        width: 335px;
        border-radius: 20px;
        overflow: hidden;
        background: #fff;
        margin-bottom: 20px;
        box-shadow: #e2e2e2 1px 1px 4px 1px; /*px*/
        &__cover {
            width: 335px;
            height: 205px;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        &__content {
            padding: 20px;
        }
        &__title {
            font-size: 26px; /*px*/
        }
        &__infos {
            margin-top: 12px;
        }
        &__category {
            font-size: 22px;/*px*/
            line-height: 2.2;
            color: #a5a5a5;
        }
        &__op {
            font-size: 40px;/*px*/
            font-weight: 500;
            color: #c8c8c8;
        }
    }
}
</style>
