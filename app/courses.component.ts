import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        <h4>{{ title }}</h4>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})

export class CoursesComponent {
    title = 'This is a course component';
    courses: string[];

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}