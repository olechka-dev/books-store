import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store';
import { userSignIn } from '../../core/store/actions';

@Component({
    selector: 'app-welcome-screen',
    templateUrl: './welcome-screen.component.html',
    styleUrls: ['./welcome-screen.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeScreenComponent implements OnInit {

    signInForm: FormGroup;

    constructor(private fb: FormBuilder,
                private store: Store<AppState>) {
    }

    ngOnInit() {
        this.signInForm = this.fb.group({
            username: ['', Validators.required]
        });
    }

    onSubmit() {
        const payload = this.signInForm.getRawValue().username;
        this.store.dispatch(userSignIn({ payload }));
    }

}
