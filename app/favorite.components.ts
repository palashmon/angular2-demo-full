import { Component, Input } from '@angular/core';

@Component({
    selector: 'favorite',
    template: `
        <i
            class="glyphicon"
            [class.glyphicon-star-empty] = '!isFavorite'
            [class.glyphicon-star] = 'isFavorite'
            (click) = "onClick()">
        </i>
    `
})

export class FavoriteComponent {
    @Input() isFavorite = false;

    onClick(){
        this.isFavorite = !this.isFavorite;
    }
}