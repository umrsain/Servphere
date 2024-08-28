import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eminent-squirrel-40173.upstash.io',
  token: process.env.REDIS_KEY,
})
