import { createClient, RedisClientType } from 'redis';

// redisClient
export const client: RedisClientType = createClient({
    url:process.env.REDIS_ENDPOINT,
});

client.on('error',(err) => {
    console.error('Redis Client Error:', err);
    throw new err;
});

// Redis Connection Module
export async function connRedis():Promise<void> {
    return new Promise((resolve, reject) => {
        client.on('connect', ()=> {
            console.log('Connected to Redis');
            resolve();
        });
        client.on('error',(err) => {
            console.error('Failed to connect to Redis:', err);
            reject(err);
        });
    });
}





