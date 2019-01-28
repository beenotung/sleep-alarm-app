import { storeGet, storeSet } from '@beenotung/tslib/store';

let acc = +storeGet('acc') || 0;

export function genId(): number {
  acc++;
  storeSet('acc', acc);
  return acc;
}
