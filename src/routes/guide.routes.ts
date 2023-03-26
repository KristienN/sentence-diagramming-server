import { Express, Request, Response } from 'express';
import fs from 'fs';
import markdownIt from 'markdown-it';
import logger from '../utils/logger';
import path from 'path';

const guideRoute = (app: Express) => {
  app.get('/manual', (req: Request, res: Response) => {
    let md = path.join(__dirname, '/../../', 'public/md/user-manual.md');
    const markdown = fs.readFileSync(md, 'utf-8');
    const html = markdownIt().render(markdown);

    res.render('user_manual', { html });
  });
  logger.info(`User Manual available at '/manual'`);
};

export default guideRoute;
