import { Request, Response, Router } from "express";
import { NotePutController } from "../controllers/NotePutController";
import container from "../dependency-injection";

export const register = (router: Router)=>{
    const controller: NotePutController = container.get('Apps.mooc.controllers.NotePutController');
    router.put('/notes/:id', (req:Request, res: Response)=> controller.run(req,res) );
}