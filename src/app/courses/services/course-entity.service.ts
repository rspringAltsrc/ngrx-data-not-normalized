import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Course} from '../model/course';

export const CourseEntityName = "Course";

@Injectable()
export class CourseEntityService
    extends EntityCollectionServiceBase<Course> {

    constructor(
        serviceElementsFactory:
            EntityCollectionServiceElementsFactory) {

        super(CourseEntityName, serviceElementsFactory);

    }

}

