import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditPsaComponent } from './edit-psa.component';
import { AddPropertyComponent } from '../../psatemplate/add-property/add-property.component';
import { AddSizerangeComponent } from '../../psatemplate/add-sizerange/add-sizerange.component';

import { PropertyModule } from '../../psatemplate/add-property/property.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    PropertyModule
  ],
  exports: [
    EditPsaComponent,
  ],
  entryComponents: [
    AddPropertyComponent,
    AddSizerangeComponent
  ],
  declarations: [
    EditPsaComponent,
  ],
})

export class EditPsaComponentModule { }
