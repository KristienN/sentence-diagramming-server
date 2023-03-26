import { Express, Request, Response } from 'express';
import axios from 'axios';
import logger from '../utils/logger';
const portalRoutes = (app: Express, port: number) => {
  app.get('/portal/', async (req: Request, res: Response) => {
    let data = (await axios.get('http://localhost:8080/api/simple')).data;

    res.render('index', { data: data });
  });

  app.get('/portal/add-simple', (req: Request, res: Response) => {
    res.render('add_simple');
  });

  app.get('/portal/sentences', async (req: Request, res: Response) => {
    let data = (await axios.get('http://localhost:8080/api/simple')).data;
    res.render('sentences', { data: data });
  });

  app.get('/portal/grades', async (req: Request, res: Response) => {
    let data = (await axios.get('http://localhost:8080/api/grade')).data;
    let quiz = (await axios.get('http://localhost:8080/api/simple')).data;
    res.render('grades', { data: data, quiz: quiz });
  });

  app.get('/portal/edit-simple/:id', async (req: Request, res: Response) => {
    let id = req.params.id;
    let data = (await axios.get('http://localhost:8080/api/simple/' + id)).data;
    res.render('edit_simple', { data });
  });

  logger.info(`Admin Portal [rendered using Pug Template Engine] available at http://localhost:${port}/portal`);
};

export default portalRoutes;
