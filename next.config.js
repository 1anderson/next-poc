/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
let basePath = '/'
let nextConfig = {reactStrictMode: true, images: {
  unoptimized : true
}}
if (isGithubActions) {
  nextConfig = {...nextConfig, ...{
  basePath: `/next-poc`}}
}
module.exports = nextConfig
