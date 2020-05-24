import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QandaComponent } from './qanda/qanda.component';
import { QandaDetailComponent } from './qanda-detail/qanda-detail.component';
import { UniversitiesComponent } from './universities/universities.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { UniversitiesDataService } from './universities-data.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileDataService } from './user-profile-data.service';
import { FavoritesDataService } from './favorites-data.service';
import { QandADataService } from './qanda-data.service';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTabsModule } from 'igniteui-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FavoritesComponent,
    PagenotfoundComponent,
    QandaComponent,
    QandaDetailComponent,
    UniversitiesComponent,
    UniversityDetailComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'universities', component: UniversitiesComponent },
      { path: 'universities/:id', component: UniversitiesComponent }

      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
    ]),
    BrowserAnimationsModule,
    IgxTabsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    UniversitiesDataService,
    FavoritesDataService,
    QandADataService,
    UserProfileDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

