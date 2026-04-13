export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  if (!basePath) return path

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const normalizedBase = basePath.endsWith('/')
    ? basePath.slice(0, -1)
    : basePath

  return `${normalizedBase}${normalizedPath}`
}
