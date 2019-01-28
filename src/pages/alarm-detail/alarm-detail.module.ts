import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AlarmDetailPage} from './alarm-detail';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    AlarmDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AlarmDetailPage),
    ComponentsModule,
  ],
})
export class AlarmDetailPageModule {
}
