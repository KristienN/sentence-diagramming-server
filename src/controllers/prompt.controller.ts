import { Request, Response } from 'express';
import logger from '../utils/logger';
import openai from '../utils/openai-config';

export const getPromptFromOpenAI = async (req: Request, res: Response) => {
  let prompt = req.params.prompt;
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 64,
      temperature: 0,
      top_p: 1.0,
    });

    return res.status(200).json({
      success: false,
      data: response.data.choices[0].text,
    });
  } catch (error: any) {
    logger.error(error);
  }
};
