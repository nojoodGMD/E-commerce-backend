import { Router } from 'express'
import { Request, Response, NextFunction } from 'express'

const router = Router()

//Root route
router.get('/',(req: Request, res: Response, next: NextFunction) => {
    try{
      res.status(200).send('Welcome to TECHNO server!')
    }catch(error){
      next(error)
    } 
  })

export default router