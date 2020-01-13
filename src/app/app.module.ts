import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, CanActivate } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { FlightService } from 'src/services/flight.sevice';
import { DisplayflightsearchComponent } from './displayflightsearch/displayflightsearch.component';
import { DefaultComponent } from './default/default.component';
import { PopupComponent } from './popup/popup.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginService } from 'src/services/login.service';
import { RegistrationService } from 'src/services/registration.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SendEmailComponent } from './send-email/send-email.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import { BookingPreviewComponent } from './booking-preview/booking-preview.component';
import { PreviewComponent } from './preview/preview.component';
import { PreviewService } from 'src/services/preview.service';
import { CancelComponent } from './cancel/cancel.component';
import { CancelService } from 'src/services/cance.service';
import { TermsComponent } from './terms/terms.component';
import { PaymentService } from 'src/services/payment.service';
import { PaymentComponent } from './payment/payment.component';
import { HomepageWithIconsComponent } from './homepage-with-icons/homepage-with-icons.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteComponent } from './delete/delete.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { FirstPageOfAdminComponent } from './first-page-of-admin/first-page-of-admin.component';
import { DeleteService } from 'src/services/delete.service';
import { AdminService } from 'src/services/admin.service';
import { BookedDetailsComponent } from './booked-details/booked-details.component';
import { BookedDetailsService } from 'src/services/booked.service';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { SuccessPageComponent } from './success-page/success-page.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserService } from 'src/services/user.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const myRoutes: Route[] = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },

  { path: 'displaysearchpage', component: DisplayflightsearchComponent },
  { path: 'displayAfterBooknow', component: DisplayflightsearchComponent },
  { path: 'preview', component: PreviewComponent },
  {path:'payment',component:PaymentComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'Home', component: SearchPageComponent },
  { path: 'ForgotPassword', component: SendEmailComponent },
  {path:'addPassenger',component:AddPassengerComponent},
  { path: 'cancellation/:Bookid', component: CancelComponent },
  { path: 'homeicons', component: HomepageWithIconsComponent },
  { path: 'bookeddetails', component: BookedDetailsComponent },
  { path: 'User', component: UserLoginComponent },
  { path: 'success', component: SuccessPageComponent},
  { path: 'changepassword', component: ChangePasswordComponent},
  { path: 'cancelticket', component: CancelTicketComponent},
  {path:'forbidden',component:ForbiddenComponent},
  { path: 'update-details', component: UpdateDetailsComponent },
  {
    path: 'firstpageofadmin', component: FirstPageOfAdminComponent, children: [
      { path: 'admin', component: AdminComponent },
      { path: 'delete', component: DeleteComponent },
      { path: 'get-details', component: GetDetailsComponent },
    ]
  ,data:{roles:['Admin']},canActivate:[AuthGuardService]},
  {
    path: 'signlog', component: LoginSignupComponent, children: [
      { path: 'register', component: RegisterComponent },
      { path: 'User', component: UserLoginComponent },
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DisplayflightsearchComponent,
    SearchPageComponent,
    DefaultComponent,
    PopupComponent,
    RegisterComponent,
    UserLoginComponent,
    SendEmailComponent,
    AddPassengerComponent,
    PreviewComponent,
    CancelComponent,
    TermsComponent,
    PaymentComponent,
    HomepageWithIconsComponent,
    AdminComponent,
    DeleteComponent,
    GetDetailsComponent,
    UpdateDetailsComponent,
    FirstPageOfAdminComponent,
    BookedDetailsComponent,
    SuccessPageComponent,
    LoginSignupComponent,
    CancelTicketComponent,
    ChangePasswordComponent,
    ForbiddenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes),
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
    CommonModule,

  ],
  entryComponents: [PreviewComponent, TermsComponent],
  providers: [FlightService, LoginService, RegistrationService,UserService, AuthGuardService, DeleteService, AdminService,
    PreviewService, PaymentService, BookedDetailsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, CancelService],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


