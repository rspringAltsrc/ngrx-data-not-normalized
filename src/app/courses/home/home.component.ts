import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {map} from 'rxjs/operators';
import { CourseEntityService } from '../services/course-entity.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

    beginnerCourses$ = this.coursesService.entities$;

    constructor(
      private coursesService: CourseEntityService) {
    }
}
