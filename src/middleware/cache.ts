import { NextFunction, Request, Response } from "express"
import logger from "../utils/logger"
import * as redis from "redis"
// import dotenv from "dotenv"
// dotenv.config()export const redisClient = redis.createClient();
const DEFAULT_EXPIRATION = 3600
const redisUrl = process.env.REDIS_URL || "redis://localhost:6379"

const client = redis.createClient({
    url:redisUrl
});
client.connect();
client.on("connect", ()=>{
    logger.info("-- Connected to Redis Instance")
})

client.on("error", (err)=>{
    logger.error(err)
})

export const cacheStoreSimples = async( data: any) => {
    await client.setEx("", DEFAULT_EXPIRATION, JSON.stringify(data))
}

export const cacheStoreGrades = async( data: any) => {
    await client.setEx("grades", DEFAULT_EXPIRATION, JSON.stringify(data))
}

export const cacheGetSimples = async(req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await client.get("simples");
        if(data!= null){
            res.json(JSON.parse(data));
        } else {
            next();
        }
    } catch (error: any) {
        logger.error(error);
    }
    
}

export const cacheGetGrades = async(req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await client.get("grades");
        if(data!= null){
            res.json(JSON.parse(data));
        } else {
            next();
        }
    } catch (error: any) {
        logger.error(error);
    }
    
}