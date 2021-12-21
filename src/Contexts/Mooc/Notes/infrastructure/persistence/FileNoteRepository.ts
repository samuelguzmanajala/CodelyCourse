import fs from 'fs';
import { serialize, deserialize } from 'bson';
import { Note } from '../../domain/Note';
import { NoteRepository } from '../../domain/NoteRepository';

export class FileNoteRepository implements NoteRepository {
    private FILE_PATH = `${__dirname}/notes`;
    async save(note: Note): Promise<void> {
        fs.promises.writeFile(this.filePath(note.id), serialize(note));
    }

    async search(noteId: string): Promise<Note> {
        const courseData = await fs.promises.readFile(this.filePath(noteId));
        const { id, title, body } = deserialize(courseData);
        return new Note({ id, title, body });
    }

    private filePath(id: string): string {
        return `${this.FILE_PATH}.${id}.repo`;
    }
}
