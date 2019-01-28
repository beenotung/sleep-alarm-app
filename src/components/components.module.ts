import {NgModule} from '@angular/core';
import {AlarmCmpComponent} from './alarm-cmp/alarm-cmp';
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [AlarmCmpComponent],
  imports: [
    IonicPageModule.forChild(AlarmCmpComponent)
  ],
  exports: [AlarmCmpComponent]
})
export class ComponentsModule {
}
