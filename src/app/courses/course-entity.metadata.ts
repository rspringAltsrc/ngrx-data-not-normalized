import { EntityMetadataMap } from "@ngrx/data";

export const CourseEntityName = "Course";
export const LessonEntityName = "Lesson";
export const UserEntityName = "User";

export const courseEntityMetadata: EntityMetadataMap = {
  Course: {
    entityDispatcherOptions: { 
      optimisticAdd: true, 
      optimisticUpdate: true 
      }
  },
  Lesson: {

  },
  // [UserEntityName]: {

  // }
}