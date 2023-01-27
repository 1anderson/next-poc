/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = '/'
let nextConfig = {reactStrictMode: true, images: {
  unoptimized : true
}}
if (isGithubActions) {
  nextConfig.assetPrefix = `/next-poc/`;
  nextConfig.basePath =  `/next-poc`;
  // nextConfig = {...nextConfig, ...{assetPrefix: `/${next-poc}/`,
  // basePath: `/${next-poc}`}}
}
console.log(nextConfig,process.env.GITHUB_ACTIONS)
module.exports = nextConfig
