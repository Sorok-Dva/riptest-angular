import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDateTimeComponent } from './show-datetime/show-datetime.component';
import { ShowIpComponent } from './show-ip/show-ip.component';

const routes: Routes = [
	{ path: 'show-ip', component: ShowIpComponent },
	{ path: 'show-datetime', component: ShowDateTimeComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class ToolsRoutingModule { }
