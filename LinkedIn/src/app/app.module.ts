import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { ProfileComponent } from "./features/profile/profile.component";
import { HomeComponent } from "./features/home/home.component";
import { EducationComponent } from "./features/profile/education/education.component";
import { EducationFormComponent } from "./features/profile/education/education-form/education-form.component";
import { ConfirmationComponent } from "./shared/confirmation/confirmation.component";
import { ExperienceComponent } from "./features/profile/experience/experience.component";
import { ExperienceFormComponent } from "./features/profile/experience/experience-form/experience-form.component";
import { PostFormComponent } from "./features/home/post/post-form/post-form.component";
import { LoginComponent } from "./features/auth/login/login.component";
import { RegisterationComponent } from "./features/auth/registeration/registeration.component";
import { LogoComponent } from './shared/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HomeComponent,
    EducationComponent,
    EducationFormComponent,
    ConfirmationComponent,
    ExperienceComponent,
    ExperienceFormComponent,
    PostFormComponent,
    LoginComponent,
    RegisterationComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
