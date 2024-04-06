import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShowIpComponent } from './tools/show-ip/show-ip.component';
import { ShowDateTimeComponent } from './tools/show-datetime/show-datetime.component';
import { NewPostComponent } from './features/new-post/new-post.component';

const ROUTES: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'tools/show-ip',
		component: ShowIpComponent
	},
	{
		path: 'tools/show-datetime',
		component: ShowDateTimeComponent
	},
	{
		path: 'post/new',
		loadChildren: () => import('./features/new-post/new-post.module').then(m => m.NewPostModule)
	},
];


@NgModule({
	imports: [ RouterModule.forRoot(ROUTES, {}) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {
}
