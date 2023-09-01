/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
}
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = 'https://wenblack.github.io/'

  assetPrefix = `${repo}/`
  basePath = ``
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'github.com',
      },
    ],
  },
  ...nextConfig
}
