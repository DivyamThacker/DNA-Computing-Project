/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      esmExternals: "loose",
      serverComponentsExternalPackages: ["mongoose"],
    },
  };
  
  module.exports = nextConfig;

//working code 1
// const nextConfig = {}

// module.exports = {
//     reactStrictMode: true,
//     serverRuntimeConfig: {
//         connectionString: "mongodb://localhost/ResourceDB",
//         secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
//     },
//     publicRuntimeConfig: {
//         apiUrl: process.env.NODE_ENV === 'development'
//             ? 'http://localhost:3000/api' // development api
//             : 'http://localhost:3000/api' // production api
//     }
// }

//not sure if working code 2
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     env: {
//         MONGODB_URI:"mongodb://localhost:27017/ResourceDB"
//     },
//     experimental:{
//         appDir:true,
//     },
// }

// module.exports = nextConfig

