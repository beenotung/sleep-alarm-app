import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alarm, checkAlarm } from '../../models/alarm';
import { genId } from '../../utils/id';
import { StorageProvider } from '../../providers/storage/storage';
import { StorageKey } from '../../models/storage-key';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * create new alarm item
 * */

@IonicPage()
@Component({
  selector: 'page-alarm-detail',
  templateUrl: 'alarm-detail.html',
})
export class AlarmDetailPage {
  title = 'New Alarm';
  alarm: Alarm;

  constructor(public navCtrl: NavController,
              public storage: StorageProvider,
              public local: LocalNotifications,
              public navParams: NavParams) {
    let now = new Date();
    this.alarm = {
      id: genId(),
      name: 'Wake up',
      hour: now.getHours(),
      minute: now.getMinutes(),
      weekday_start: 1,
      weekday_end: 6,
      active: false,
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmDetailPage');
  }

  async save() {
    let ids = await this.storage.get(StorageKey.alarm_ids, () => []);
    ids.push(this.alarm.id);
    await Promise.all([
      this.storage.set(StorageKey.alarm_ids, ids),
      this.storage.set(this.alarm.id, this.alarm),
    ]);
    checkAlarm(this.alarm, this.local);
    this.navCtrl.pop();
  }

  cancel() {
    this.navCtrl.pop();
  }
}
