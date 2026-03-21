import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

//creation of the ratelimiter for the number of requests sent

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(), 
  limiter: Ratelimit.fixedWindow(300, "60 s"), 
  analytics: false 
});

export default ratelimit;