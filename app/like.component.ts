
import {Component, Input} from '@angular/core';

@Component({
    selector: 'like',
    template: `
			<i
				class="glyphicon glyphicon-heart" 
				[class.highlighted]="iLike"
				(click)="onClick()">
			</i>
			<span>{{ totalLikes }}</span>
    `,
    styles: [`
        .glyphicon-heart {
					  font-size:30px;
            color: #ccc;
            cursor: pointer;
        }
        span {font-size:30px;}
        .highlighted {
            color: deeppink;
        }   
    `]
})
export class LikeComponent {
    @Input() totalLikes = 0;
    @Input() iLike = false;
    
    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
}