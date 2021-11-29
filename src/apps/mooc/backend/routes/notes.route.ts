import { Request, Response, Router } from "express";
import { NotesPutController } from "../controllers/NotesPutController";
import container from "../dependency-injection";

export const register = (router: Router)=>{
    const controller: NotesPutController = container.get('Apps.mooc.controllers.NotesPutController');
    router.put('/notes/:id', (req:Request, res: Response)=> controller.run(req,res) );
}