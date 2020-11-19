import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ROUTES, RoutingModule } from './routing/routing.module';
import { LayoutModule } from './layout/layout.module';
import { UIModule } from './ui/ui.module';
import { PagesModule } from './pages/pages.module';
import { pageDataReducer } from './store/reducers/page-data.reducer';
import { appSettingsReducer } from './store/reducers/app-settings.reducer';
import { patientsReducer } from './store/reducers/patients.reducer';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {
  GridModule,
  GroupService,
  PagerModule,
  PageService,
  SortService,
} from '@syncfusion/ej2-angular-grids';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductDataService } from './pages/cocis/inline-edit/product-data.service';
import { ProductStoreService } from './pages/cocis/inline-edit/product-store.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GridModule,
    PagerModule,
    InMemoryWebApiModule.forRoot(ProductDataService),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({
      pageData: pageDataReducer,
      appSettings: appSettingsReducer,
      patients: patientsReducer,
    }),

    RoutingModule,
    LayoutModule,
    UIModule,
    PagesModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    PageService,
    SortService,
    GroupService,
    ProductStoreService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
