import fs from 'fs';
import { serialize, deserialize } from 'bson';
import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';

export class FileCourseRepository implements CourseRepository {
    private FILE_PATH = `${__dirname}/course`;
    async save(note: Course): Promise<void> {
        fs.promises.writeFile(this.filePath(note.id), serialize(note));
    }

    async search(noteId: string): Promise<Course> {
        const courseData = await fs.promises.readFile(this.filePath(noteId));
        const { id, name, duration } = deserialize(courseData);
        return new Course({ id, name, duration });
    }

    private filePath(id: string): string {
        return `${this.FILE_PATH}.${id}.repo`;
    }

}
