import { Note } from "../../../../../src/Contexts/Mooc/Notes/domain/Note";
import { NoteRepository } from "../../../../../src/Contexts/Mooc/Notes/domain/NoteRepository";
import { NoteCreator } from "../../../../../src/Contexts/Mooc/Notes/application/NoteCreator";


describe('NoteCreator', () => {
    it('should create valid course', async () => {
        const repository: NoteRepository = {
            save: jest.fn()
        }
        const creator = new NoteCreator(repository);
        const id = 'id';
        const title = 'name';
        const body = 'body';
        const expectedNote = new Note({id, title, body});

        await creator.run(id, title, body);

        expect(repository.save).toHaveBeenCalledWith(expectedNote);
    })
})