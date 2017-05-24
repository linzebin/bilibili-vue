<template>
    <div class="slider-wrapper">
        <div class="slider-bg">
            <div class="swipe" ref="swipe">
                <div class="swipe-wrap">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UIPageView.ts"></script>

<style lang="scss">
.slider-wrapper {
    position: relative;
    margin-bottom: 12px;
    overflow: hidden;
    height: 100%;
    .slider-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // background-color: rgba(0, 0, 0, 0.8);
    }
    .swipe {
        position: relative;
        overflow: hidden;
        height: 100%;
        width: 100%;
        margin: 0 auto; // height: 175px;
    }
    .swipe-wrap {
        overflow: hidden;
        position: relative;
        height: 100%;
    }
}
</style>
