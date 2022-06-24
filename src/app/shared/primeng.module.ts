import { NgModule } from '@angular/core';

// primeng imports
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';

const primeNgModules = [InputTextModule, TableModule, ImageModule];

@NgModule({
  declarations: [],
  imports: [...primeNgModules],
  exports: [...primeNgModules],
})
export class PrimengModule {}
