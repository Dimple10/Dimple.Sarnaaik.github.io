/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // TODO: set to '/Dimple.Sarnaaik.github.io' if this is a project page
  trailingSlash: true,
  images: { unoptimized: true },
}
module.exports = nextConfig
