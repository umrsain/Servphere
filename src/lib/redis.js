import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://ultimate-cicada-26432.upstash.io',
  token: process.env.REDIS_KEY,
})
