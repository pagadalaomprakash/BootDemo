import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SprinBootDemoSharedModule } from 'app/shared/shared.module';
import { SprinBootDemoCoreModule } from 'app/core/core.module';
import { SprinBootDemoAppRoutingModule } from './app-routing.module';
import { SprinBootDemoHomeModule } from './home/home.module';
import { SprinBootDemoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SprinBootDemoSharedModule,
    SprinBootDemoCoreModule,
    SprinBootDemoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SprinBootDemoEntityModule,
    SprinBootDemoAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class SprinBootDemoAppModule {}
