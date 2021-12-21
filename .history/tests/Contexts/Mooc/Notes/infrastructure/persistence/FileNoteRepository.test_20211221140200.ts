import { Note } from "../../../../../../src/Contexts/Mooc/Notes/domain/Note";
import { FileNoteRepository } from "../../../../../../src/Contexts/Mooc/Notes/infrastructure/persistence/FileNoteRepository";

describe('FileNoteRepository', () => {
    it('should save a note', async () => {
        const expectedNote = new Note({ id: 'id', title: 'title', body: 'body' });
        const repository= new FileNoteRepository();

        await repository.save(expectedNote);
        const note = await repository.search('id');
        expect(note).toEqual(expectedNote);
    });
});
