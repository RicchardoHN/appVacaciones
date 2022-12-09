import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CargoComponent } from './cargo/cargo.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { CodigoTrabajoComponent } from './codigo-trabajo/codigo-trabajo.component';


@NgModule({
  declarations: [
    EmpleadoComponent,
    CargoComponent,
    VacacionesComponent,
    CodigoTrabajoComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
