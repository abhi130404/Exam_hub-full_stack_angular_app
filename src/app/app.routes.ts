import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { TestLoginPageComponent } from './test_pages/test-login-page/test-login-page.component';
import { TestPageComponent } from './test_pages/question_paper_page/test-page/test-page.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AdmissionPageComponent } from './admission-page/admission-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ResultPageComponent } from './test_pages/result-page/result-page.component';
import { ScorePageComponent } from './test_pages/score-page/score-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AdmisionReceiptComponent } from './admision-receipt/admision-receipt.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { DeleteConformModalComponent } from './delete_profile_folder/delete-conform-modal/delete-conform-modal.component';


export const routes: Routes = [{path:'', component:HomePageComponent },
                               {path:'login_page', component:LoginPageComponent },
                               {path:'register_page', component:RegisterPageComponent},
                               {path:'course_page', component:CoursesCardComponent},
                               {path:'test_page', component:TestLoginPageComponent},
                               {path:'test_home_page', component:TestPageComponent},
                               {path:'profile_page', component:ProfileComponent},
                               {path:'navigation_page', component:NavigationBarComponent},
                               {path:'admision_page', component:AdmissionPageComponent},
                               {path:'payment_page', component:PaymentPageComponent},
                               {path:'result_page', component:ResultPageComponent},
                               {path:'score_page', component:ScorePageComponent},
                               {path:'forget_password_page', component:ForgetPasswordComponent},
                               {path:'admision_receipt_page', component:AdmisionReceiptComponent},
                               {path:'update_page', component:UpdatePageComponent},
                               {path:'delete_profile_confirm_page', component:DeleteConformModalComponent},

                               
                               
];
