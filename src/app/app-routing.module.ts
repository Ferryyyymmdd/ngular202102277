import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { CuacaComponent } from './cuaca/cuaca.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { OtentikasiGuard } from './otentikasi.guard';
import { ForexComponent } from './forex/forex.component';



const routes: Routes = [
  {path: "admin", component: AdminComponent },
  {path: "cuaca", component: CuacaComponent, canActivate:[OtentikasiGuard] },
  {path:"dashboard", component: DashboardComponent, canActivate:[OtentikasiGuard] },
  {path:"dashboard2", component: Dashboard2Component, canActivate:[OtentikasiGuard] },
  {path:"forex", component : ForexComponent, canActivate :[OtentikasiGuard]},
  {path: "login", component: LoginComponent},
  {path:"register",component: RegisterComponent},
  {path: "", redirectTo:"login", pathMatch:"full"},
  {path: "mahasiswa", component: MahasiswaComponent, canActivate:[OtentikasiGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
