/** Static files from /public — must respect Vite `base` (e.g. GitHub project Pages). */
export function publicAsset(path) {
  const normalized = String(path).replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}
