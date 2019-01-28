import { Component, Input } from '@angular/core';
import { Alarm } from '../../models/alarm';
import { EnumOption } from '../../models/enum-option';
import { WeekDay } from '../../models/week-day';
import { enum_values } from '@beenotung/tslib/enum';

@Component({
  selector: 'alarm-cmp',
  templateUrl: 'alarm-cmp.html',
})
export class AlarmCmpComponent {

  @Input()
  alarm: Alarm;

  weekDayOptions: EnumOption<WeekDay>[];

  constructor() {
    console.log('Hello AlarmCmpComponent Component');
    this.weekDayOptions = enum_values(WeekDay).map(x => ({
      text: WeekDay[x as any],
      value: x as WeekDay,
    }));
  }

}
