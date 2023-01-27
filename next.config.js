/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = '/'
let nextConfig = {reactStrictMode: true, images: {
  unoptimized : true
}}
if (isGithubActions) {
  nextConfig = {...nextConfig, ...{assetPrefix: `/next-poc`,
  basePath: `/next-poc`}}
}
module.exports = nextConfig
