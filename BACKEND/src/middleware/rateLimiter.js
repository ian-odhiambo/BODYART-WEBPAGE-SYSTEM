// import rateLimit from "../config/upstash.js";

// const rateLimiter = async (req, res, next) =>{

//     try{
//         const {success} = await rateLimit.limit(userid);
//         if(!success){
//             return res.status(429).json({message:"Too many requests, please try again later"})
//         }
//         next();
//     }catch(error){
//         console.log("Rate limit error", error)
//         next(error);
//     }

// }

// export default rateLimiter

import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
  // Skip rate limiting for static assets
  if (req.path.startsWith('/assets/') || req.path.match(/\.(jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
    return next();
  }

  try {
    // Use IP address instead of static key
    const identifier = req.ip;

    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later" });
    }

    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next();
  }
};

export default rateLimiter;