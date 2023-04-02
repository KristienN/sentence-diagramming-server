import dotenv from 'dotenv';
import connect from './utils/connect';
import logger from './utils/logger';
import swaggerDocs from './utils/swagger';
import { Express } from 'express';
import createServer from './utils/server';
import portalRoutes from './routes/portal.routes';
import gradesRoutes from './routes/grades.routes';

dotenv.config();

const port: number = +process.env.PORT || 8080;
const app: Express = createServer();

app.listen(port, async () => {
  logger.info(`Application is running at http://localhost:${port}`);
  await connect();
  portalRoutes(app, port);
  swaggerDocs(app, port);
});
