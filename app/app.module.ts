import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite.components';
import { CourseService } from './course.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent
  ],
  bootstrap: [AppComponent],
  providers: [CourseService]
})
export class AppModule { }
