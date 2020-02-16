import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { EmployeeCardSharedModule } from 'app/shared/shared.module';
import { EmployeeCardCoreModule } from 'app/core/core.module';
import { EmployeeCardAppRoutingModule } from './app-routing.module';
import { EmployeeCardHomeModule } from './home/home.module';
import { EmployeeCardEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    EmployeeCardSharedModule,
    EmployeeCardCoreModule,
    EmployeeCardHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EmployeeCardEntityModule,
    EmployeeCardAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class EmployeeCardAppModule {}
