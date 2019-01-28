import { LocalNotifications } from '@ionic-native/local-notifications';

export interface Alarm {
  id: number
  name: string
  hour: number
  minute: number
  weekday_start: number
  weekday_end: number
  active: boolean
}


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
    local.schedule({
      id: +alarm.id,
      title: alarm.name,
      text: 'scheduled at ' + date.toLocaleString(),
      trigger: {
        every: {
          hour: alarm.hour,
          minute: alarm.minute,
        },
      },
      sound: 'assets/audio/getup.mp3',
    });
  } else {
    await local.cancel(+alarm.id);
  }
}
