import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
 } from '@angular/material';

const materialModules = [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
];

@NgModule({
    imports: [
        materialModules
    ],
    exports: [
        materialModules
    ],
})

export class MaterialModule {}
