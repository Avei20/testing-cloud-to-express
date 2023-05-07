import { Request, Response, Router } from "express";

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Halo'
    })
})
// router.post()

export default router