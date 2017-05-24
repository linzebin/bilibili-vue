<template>
    <div class="p-index">
        <div class="index-navwrap navlist">
            <a class="navitem">直播</a>
            <a class="navitem">推荐</a>
            <a class="navitem">追番</a>
        </div>

        <div class="page-content">
            <UIPageView>
                <UIPageViewItem>page1</UIPageViewItem>
                <UIPageViewItem>page2</UIPageViewItem>
                <UIPageViewItem>page3</UIPageViewItem>
            </UIPageView>
        </div>
    </div>
</template>

<script lang="ts">
import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'
import UIPageView from '@/components/UIPageView.vue'
import UIPageViewItem from '@/components/UIPageViewItem.vue'

@Component({
    components: { UIPageView, UIPageViewItem }
})
export default class IndexNav extends Vue {

}
</script>

<style lang="scss">
@import "../styles/common.scss";

.index-navwrap {
    background-color: $primary-color;
    height: 130px;/*px*/
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
    top: 130px;/*px*/
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
