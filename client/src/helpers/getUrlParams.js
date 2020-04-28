export default function getUrlParams(param) {
  const { search } = window.location;
  const searchParams = new URLSearchParams(search);
  return searchParams.get(param) || false;
}
