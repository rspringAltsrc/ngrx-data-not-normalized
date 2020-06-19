import { EntityMetadataMap } from "@ngrx/data";

export const CourseEntityName = "Course";
export const LessonEntityName = "Lesson";
export const UserEntityName = "User";

export const courseEntityMetadata: EntityMetadataMap = {
  [CourseEntityName]: {
    entityDispatcherOptions: { 
      optimisticAdd: true, 
      optimisticUpdate: true 
      }
  },
  [LessonEntityName]: {

  },
[UserEntityName]: {

}
}