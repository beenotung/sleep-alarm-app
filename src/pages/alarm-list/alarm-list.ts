import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alarm, checkAlarm } from '../../models/alarm';
import { StorageProvider } from '../../providers/storage/storage';
import { StorageKey } from '../../models/storage-key';
import { pages } from '../pages';
import { Subscription } from 'rxjs';
import { remove } from '@beenotung/tslib/array';
import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-alarm-list',
  templateUrl: 'alarm-list.html',
})
export class AlarmListPage {
  alarms: Alarm[] = [];

  constructor(public navCtrl: NavController,
              public storage: StorageProvider,
              public local: LocalNotifications,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmListPage');
    this.loadList();
  }

  async loadList() {
    let keys = await this.storage.get(StorageKey.alarm_ids, () => []);
    this.alarms = await Promise.all(keys.map(x => this.storage.get(x)));
  }

  create() {
    this.navCtrl.push(pages.AlarmDetailPage);
    let sub: Subscription = this.navCtrl.viewDidEnter.subscribe(
      view => {
        if (view.component === AlarmListPage) {
          this.loadList();
          sub.unsubscribe();
        }
      },
    );
  }

  async save(alarm: Alarm) {
    await this.storage.set(alarm.id, alarm);
    await checkAlarm(alarm, this.local);
  }

  async cancel(alarm: Alarm) {
    // this.storage.get(alarm.id).then(x => replaceObject(alarm, x));
    let ids = await this.storage.get(StorageKey.alarm_ids, () => []);
    remove(ids, alarm.id);
    await Promise.all([
      this.storage.set(StorageKey.alarm_ids, ids),
      this.storage.remove(alarm.id),
    ]);
    this.loadList();
  }
}
