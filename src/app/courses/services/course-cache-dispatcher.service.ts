import { Injectable } from "@angular/core";
import { Course } from "../model/course";
import {
  EntityDispatcherBase,
  EntityDispatcherFactory,
  EntityDispatcher
} from "@ngrx/data";
import { CourseEntityName } from "../course-entity.metadata";
import { of, Subscription } from "rxjs";
import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CourseCacheDispatcherService {
  entDispatcher: EntityDispatcher<Course>;
  subscriptions = new Subscription();
  constructor(readonly entityDispatcherFactory: EntityDispatcherFactory) {
    this.entDispatcher = entityDispatcherFactory.create(CourseEntityName);
  }

  init(): void {
    this.subscribeToSignalR();
  }

  subscribeToSignalR() {
    const addOne = of({
      category: "lala",
      description: "Hello world",
      longDescription: "This was just (simulated) pushed from SignalR",
      id: 234234
    })
      .pipe(
        delay(5000),
        map(e => this.entDispatcher.addOneToCache(e))
      )
      .subscribe();

    this.subscriptions.add(addOne);
  }
  unSubcribeAll() {
    this.subscriptions.unsubscribe();
  }
}
