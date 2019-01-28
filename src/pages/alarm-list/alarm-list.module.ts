import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlarmListPage } from './alarm-list';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    AlarmListPage,
  ],
  imports: [
    IonicPageModule.forChild(AlarmListPage),
    ComponentsModule,
  ],
})
export class AlarmListPageModule {}
