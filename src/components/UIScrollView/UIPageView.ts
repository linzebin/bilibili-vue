import { Component } from 'vue-property-decorator'
import UIScrollView from './UIScrollView'

@Component({
    template: `
    <div>
        UIPageView
    </div>`
})
export default class UIPageView extends UIScrollView {

    mounted(){
        console.log('UIPageView mounted.', this.direction)
    }
}
