import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'tools',
		loadChildren: () => import('./tools/tools.module').then(m => m.ToolsRoutingModule)
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
