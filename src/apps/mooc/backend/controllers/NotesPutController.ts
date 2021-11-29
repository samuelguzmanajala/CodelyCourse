import { Controller } from "./Controller";
import { Request, Response } from "express"
import httpStatus from "http-status";
import { NoteCreator } from "../../../../Contexts/Mooc/Notes/application/NoteCreator";

export class NotesPutController implements Controller {
    constructor(private noteCreator: NoteCreator){ }

    async run(req: Request, res: Response): Promise<void> {
        const {id, title, body} = req.body;

        await this.noteCreator.run(id, title, body);

        res.status(httpStatus.CREATED).send();
    }
}