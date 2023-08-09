import { getStatusOptions } from '../utils/services/specs';

async function toggleDateOrder(arr) {
  return structuredClone(arr.reverse());
}

async function groupByStatus(arr) {
  const options = await getStatusOptions();
  const groups = {};
  options.forEach((type) => {
    groups[`${type}`] = [];
  });
  arr.forEach((spec) => {
    groups[`${spec.status}`]?.push(spec);
  });
  let groupedArr = [];
  Object.values(groups).forEach(
    (group) => (groupedArr = groupedArr.concat(group))
  );
  return groupedArr;
}

export { toggleDateOrder, groupByStatus };
