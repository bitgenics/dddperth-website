import Route from 'route-parser'

export async function route(settings, path, request) {
  const posts_match = new Route('/p/:id').match(path)
  if (posts_match) return `/post?id=${posts_match.id}`

  return path
}
