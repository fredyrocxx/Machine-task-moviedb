import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleaRoutingModule } from './modulea-routing.module';
import { ModuleaComponent } from './modulea.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    ModuleaComponent
  ],
  imports: [
    CommonModule,
    ModuleaRoutingModule,
    InfiniteScrollModule

  ]
})
export class ModuleaModule { }
