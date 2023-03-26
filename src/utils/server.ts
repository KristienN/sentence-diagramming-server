import express from 'express';
import simpleRoutes from '../routes/simple.routes';
import gradesRoutes from '../routes/grades.routes';
import promptRoutes from '../routes/prompt.routes';
import cors from 'cors';
import path from 'path';
import pug from 'pug';
import guideRoutes from '../routes/guide.routes';

const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(express.static(path.join(__dirname, '/../../', 'public')));

  app.set('views', './src/views');
  app.set('view engine', 'pug');

  simpleRoutes(app);
  gradesRoutes(app);
  promptRoutes(app);
  guideRoutes(app);

  return app;
};

export default createServer;
