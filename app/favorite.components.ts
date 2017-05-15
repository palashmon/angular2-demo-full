import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
        .glyphicon{
            font-size:30px;
        }
        .glyphicon-star-empty{
            color: red;
        }
        .glyphicon-star{
            color: orange;
        }
    `]
})

export class FavoriteComponent {
    @Input() isFavorite = false;

    @Output('favoriteChange') change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite, time: Date.now() });
    }
}