export function urlize(strings, ...slugs) {
  return strings.map((str, i) => `${str}${
    encodeURIComponent((slugs[i] || '').toLowerCase().replace(/\s+/g, '-'))
  }`).join('')
}
