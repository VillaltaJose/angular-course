import { Component } from '@angular/core';
import { COURSES } from '../db-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    courses = COURSES;

    startDay = new Date(2000, 0, 1);

    title = COURSES[1].description;

    price = 9.992324;

    rate = 0.67;

    course = COURSES[1];

    onCardClicked() {
        console.log('APP component - Course card clicked');
    }

    onCourseSelected(value) {
        console.log(value);

    }

}
