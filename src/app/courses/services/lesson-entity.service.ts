import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Lesson} from '../model/lesson';
import { LessonEntityName } from '../../reducers';

@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<Lesson> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super(LessonEntityName, serviceElementsFactory);
    }

}
