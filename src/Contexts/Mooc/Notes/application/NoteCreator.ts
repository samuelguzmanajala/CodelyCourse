import { Note } from "../domain/Note";
import { NoteRepository } from "../domain/NoteRepository";

export class NoteCreator {
    private repository: NoteRepository;

    constructor(repository: NoteRepository) {
        this.repository= repository;
     }

    async run(id: string, title: string , body: string){
        const note= new Note({id, title, body});
        return this.repository.save(note);
    }
}