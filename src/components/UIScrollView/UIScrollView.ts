import * as Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import './UIScrollView.scss'

type SwipeDirection = 'vertical' | 'horizontal'

@Component({
    template: `
    <div class="scroll-content"
         @touchstart="onTouchStart" @touchmove="onTouchMove"
         @touchend="onTouchEnd" @transitionend="onTransitionEnd">
        <slot name="pull-refresh">
            <!--<div>再拉就刷新给你看</div>-->
        </slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>`
})
export default class UIScrollView extends Vue {

    @Prop({ default: 'vertical' })
    direction: SwipeDirection

    @Prop({ default: true })
    bounce: boolean

    @Prop({ default: false })
    prevent: boolean


    state = {
        start: {
            x: 0,
            y: 0,
            time: 0
        }
    }
    isScrolling = false
    isRefreshing = false
    delta = {
        x: 0,
        y: 0
    }

    startScroll = 0
    scrollTop = 0
    // wrapStyle = {
    //     height: 'auto',
    //     width: 'auto',
    //     transform: '',
    //     transition: ''
    // }

    mounted() {
        console.log('UIScrollView mounted.', this.direction)

        if (this.direction === 'vertical') {
            // this.wrapStyle.height = this.$el.offsetHeight + 'px'
        }
    }

    doPullDown() {
        this.$emit('pulldown')
    }
    doPullUp() {
        this.$emit('pullup')
    }
    doRefresh() {
        this.$emit('refresh')
    }

    // event handlers
    onTouchStart(event: TouchEvent) {
        console.log('touch start')

        let touches = event.touches[0]
        this.state.start = {
            x: touches.pageX,
            y: touches.pageY,
            time: +new Date()
        }

        this.startScroll = this.scrollTop
        this.delta = { x: 0, y: 0 }
    }

    onTouchMove(event: TouchEvent) {
        if (this.isRefreshing)
            return false;
        // console.log('touch move')
        let touches = event.touches[0]
        this.delta = {
            x: touches.pageX - this.state.start.x,
            y: touches.pageY - this.state.start.y
        }

        this.isScrolling = Math.abs(this.delta.x) < Math.abs(this.delta.y) && this.direction === 'vertical'

        if (this.isScrolling) {
            if (this.startScroll + this.delta.y > 0) {
                this.delta.y = Math.pow(this.delta.y, 0.9)
            }
            console.log('move')
            this.scrollTop = this.startScroll + this.delta.y


            // this.wrapStyle.transform = `translate3d(0px, ${this.scrollTop}px, 0px)`
            this.$el.style.transform = `translate3d(0px, ${this.scrollTop}px, 0px)`
            event.preventDefault()
        }
    }

    onTouchEnd(event: TouchEvent) {
        console.log('touch end')
        if (this.scrollTop > 0 && !this.isRefreshing) {
            this.$el.style.transition = `-webkit-transform 0.5s cubic-bezier(0.333333, 0.666667, 0.666667, 1) 0s`
            this.isRefreshing = true
            this.delta.y = 0
        }
        this.scrollTop = this.startScroll + this.delta.y
        this.$el.style.transform = `translate3d(0px, ${this.scrollTop}px, 0px)`
        this.delta = { x: 0, y: 0 }
    }

    onTransitionEnd() {
        console.log('transition end')
        this.isRefreshing = false
        this.$el.style.transition = ''
        this.scrollTop = 0
        this.startScroll = 0
    }


}
