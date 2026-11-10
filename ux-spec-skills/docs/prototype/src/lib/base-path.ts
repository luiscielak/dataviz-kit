/** Must match `basePath` in next.config.ts. */
export const BASE_PATH = "/dataviz";

/** Prefix a root-relative path so raw `<a>` / `<iframe>` URLs match the app basePath. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
