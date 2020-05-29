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
import { UserProfileDetailComponent } from './user-profile-detail/user-profile-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileDataService } from './user-profile-data.service';
import { FavoritesDataService } from './favorites-data.service';
import { QandADataService } from './qanda-data.service';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTabsModule } from 'igniteui-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    UserProfileDetailComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    NgbModule,
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'universities', component: UniversitiesComponent, canActivate: [AuthorizeGuard]},
      { path: 'universities/:id', component: UniversityDetailComponent, canActivate: [AuthorizeGuard] },
      { path: 'add-user-profile', component: UserProfileComponent, canActivate: [AuthorizeGuard] },
      { path: 'user-profile', component: UserProfileDetailComponent, canActivate: [AuthorizeGuard] },
      { path: 'q-and-a', component: QandaComponent, canActivate: [AuthorizeGuard] },
      { path: 'q-and-a/:id', component: QandaDetailComponent, canActivate: [AuthorizeGuard] },
      { path: 'favorites', component: FavoritesComponent, canActivate: [AuthorizeGuard] },
      { path: '**', component: PagenotfoundComponent },
      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
    ]),
    BrowserAnimationsModule,
    IgxTabsModule,
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

