/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserOrOrgPage = repoName.endsWith('.github.io')

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubActions && !isUserOrOrgPage ? `/${repoName}` : '',
  assetPrefix: isGithubActions && !isUserOrOrgPage ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
