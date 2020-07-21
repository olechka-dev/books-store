import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { welcomeRouter } from './welcome-routing.module';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [WelcomeScreenComponent],
    imports: [
        CommonModule,
        welcomeRouter,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule
    ]
})
export class WelcomeModule {
}
