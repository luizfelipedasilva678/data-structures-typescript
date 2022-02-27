import { defaultToString } from '../utils';

export default function djb2HashCode(key: any) {
  const tableKey = defaultToString(key);
  let hash = 5381;
  for (let i = 0; i < tableKey.length; i++) {
    hash = hash * 33 + tableKey.charCodeAt(i);
  }
  return hash % 1013;
}
