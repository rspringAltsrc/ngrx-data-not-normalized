import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { EntityDispatcherBase, EntityDispatcherFactory, EntityDispatcher } from '@ngrx/data';
import { CourseEntityName } from '../course-entity.metadata';

@Injectable({
  providedIn: 'root'
})
export class CourseCacheDispatcherService {
  d: EntityDispatcher<Course>;
  constructor(
    readonly entityDispatcherFactory: EntityDispatcherFactory
  ) {
    this.d = entityDispatcherFactory.create(CourseEntityName);
  }

  init(): void {
    setTimeout(() => {
      this.d.addOneToCache({
        category: 'lala',
        description: 'hello world',
        id: 234234
      });
    }, 5000);
  }

}
