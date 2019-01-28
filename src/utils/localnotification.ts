import { LocalNotifications } from '@ionic-native/local-notifications';

export function getLocalNotification() {
  return ((window as any).cordova.plugins as any).notification.local as LocalNotifications;
}
