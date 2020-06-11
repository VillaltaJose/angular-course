import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	courses$: Observable<Course[]>;
	courses = COURSES;

	constructor(
		private coursesService: CoursesService
	) {

	}

	ngOnInit() {

		console.log(this.coursesService);

		this.courses$ = this.coursesService.loadCourses();

	}

	save(course: Course) {

		this.coursesService.saveCourse(course)
			.subscribe(
				() => { console.log('Curso guardado!') }
			);

	}



}
