import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageKey } from '../../models/storage-key';

@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  set(key: StorageKey | string | number, value) {
    key = key.toString();
    return this.storage.set(key, value);
  }

  async get<A = any>(key: StorageKey | string | number, defaultGenerator?: () => A): Promise<A> {
    key = key.toString();
    return (await this.storage.keys()).indexOf(key) == -1
      ? (defaultGenerator ? defaultGenerator() : undefined)
      : await this.storage.get(key);
  }

  remove(key: StorageKey | string | number) {
    key = key.toString();
    return this.storage.remove(key);
  }
}
