// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports={
  env:{
    MONGO_URL: "mongodb+srv://quizSystem:Quiz@cluster0.fhj2zb4.mongodb.net/?retryWrites=true&w=majority",
    JWT_EXPIRY_SECONDS : "86400",
    JWT_TOKEN_KEY:"secret"
    
  }
}
