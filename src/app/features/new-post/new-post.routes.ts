import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './new-post.component';

export const NewPostRoutes: Routes = [
	{ path: '', component: NewPostComponent }
];

@NgModule({
	imports: [RouterModule.forChild(NewPostRoutes)],
	exports: [RouterModule]
})

export class NewPostRoutingModule { }
