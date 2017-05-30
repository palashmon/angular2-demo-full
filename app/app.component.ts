import { Component } from '@angular/core';
import { FavoriteComponent } from './favorite.components';
import { LikeComponent } from './like.component';

@Component({
  selector: 'my-app',
  template: `
			<div class="container">
				<div class="row">
					<h3>Favorite Component</h3>
					<div class="col-md-11">
						<favorite [isFavorite]="post.isFavorite" (favoriteChange)="onFavoriteChange($event)"></favorite>
					</div>
				</div>

				<div class="row"> 
					<h3>Like Component</h3> 
					<div class="col-md-11">
						<like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
					</div>
				</div> 

				<div class="row"> 
					<h3>Voter Component</h3> 
					<div class="col-md-11">
						<voter 
							[voteCount]="question.voteCount" 
							[myVote]="question.myVote" 
							(vote)="onVoteChange($event)">
						</voter>
					</div>
				</div>   
			</div>   
    `
})

export class AppComponent {

  // May be a data coming from server
  post = {
    title: 'Some Title Here',
    isFavorite: false
  }

  // Call this function on change of Favorite componenet
  onFavoriteChange($event){
    console.log($event);
  }

	// Tweet data from server
	tweet = {
		totalLikes: 20,
		iLike: false
	}

	// Current question vote details from server
	question = {
		voteCount: 115,
		myVote: 0
	}

	// Call this function on change of Voter componenet
  onVoteChange($event){
    console.log($event);
  }
}
