import { Component } from '@angular/core';
import { FavoriteComponent } from './favorite.components';

@Component({
  selector: 'my-app',
  template: `
      <h3>Favorite Component</h3>
      <div class="col-md-11 col-md-offset-1">
        <favorite [isFavorite]="post.isFavorite"></favorite>
      </div>      
    `
})

export class AppComponent {

  // May be a data coming from server
  post = {
    title: 'Some Title Here',
    isFavorite: false
  }
}
