import _ from "lodash";

export function paginate(itmes, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(itmes)
  .slice(startIndex)
  .take(pageSize)
  .value();
}
