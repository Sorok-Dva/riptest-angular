import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NewPostComponent } from './new-post.component';
import { NewPostRoutes } from './new-post.routes';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [NewPostComponent],
	imports: [
		CommonModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		ReactiveFormsModule,
		RouterModule.forChild(NewPostRoutes),
	]
})
export class NewPostModule {}
