import { LocalNotifications } from '@ionic-native/local-notifications';
import * as util from 'util';

export interface Alarm {
  id: number
  name: string
  hour: number
  minute: number
  weekday_start: number
  weekday_end: number
  active: boolean
}

export let sound = 'assets/audio/getup.mp3';

export async function checkAlarm(alarm: Alarm, local: LocalNotifications) {
  debugger;
  // let local = getLocalNotification();
  if (alarm.active) {
    let date = new Date();
    date.setHours(alarm.hour);
    date.setMinutes(alarm.minute);
    date.setSeconds(0, 0);
    for (let i = alarm.weekday_start; i <= alarm.weekday_end; i++) {

    }
    let sub = local.on('trigger').subscribe(
      x => {
        console.log('triggered:', x);
        alert('triggered now: ' + util.format(x));
        sub.unsubscribe();
      },
    );
    local.schedule({
      id: +alarm.id,
      title: alarm.name,
      text: 'scheduled at ' + date.toLocaleString(),
      data: date,
      trigger: {
        every: {
          hour: alarm.hour,
          minute: alarm.minute,
        },
      },
      sound: sound,
    });
  } else {
    let ids = await local.getIds();
    if (ids.indexOf(+alarm.id) !== -1) {
      await local.cancel(+alarm.id);
    }
  }
}
