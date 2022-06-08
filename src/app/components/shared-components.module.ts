import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MultiSelectButtonsGroupComponent } from './multi-select-buttons-group/multi-select-buttons-group.component';

@NgModule({
  declarations: [MultiSelectButtonsGroupComponent]
  ,
  imports: [
    CommonModule,
    IonicModule,
    IonicModule.forRoot()
  ],
  exports: [MultiSelectButtonsGroupComponent],
})
export class SharedComponentsModule {}