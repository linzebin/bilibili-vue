import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Swipe = require('swipejs') //https://github.com/lyfeyaj/swipe

@Component
export default class UIPageView extends Vue {
    items = new Array<HTMLElement>()
    swiper: Swipe = null
    active = 0

    mounted() {
        this.initSwipe()
        this.items = this.$slots.default.filter((value) => {
            return value.tag !== void 0
        }).map((value) => {
            return value.elm as HTMLElement
        })
    }

    getItemCount() {
        if (this.$slots.default !== undefined) {
            return this.$slots.default.filter((value) => {
                return value.tag !== void 0
            }).length
        }
        return 0
    }

    initSwipe() {
        const element = this.$refs['swipe'];
        this.swiper = new Swipe(element, {
            startSlide: 0,
            auto: 3000,
            draggable: true,
            autoRestart: false,
            continuous: false,
            disableScroll: true,
            stopPropagation: true,
            callback: (index, element) => { this.active = index; },
            transitionEnd: (index, element) => { }
        });
    }

    switchSwipe(event: Event, index: number) {
        event.preventDefault()
        this.swiper.slide(index, 300)
    }
}
