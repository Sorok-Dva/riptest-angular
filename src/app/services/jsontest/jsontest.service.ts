import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENVIRONMENT } from '../../../environments/environment';
import { GetDateTime, GetIp } from './jsontest.type';


@Injectable({
	providedIn: 'root',
})
export class JsontestService {
	constructor(
		private _http: HttpClient,
	) {}

	public getIp() {
		return this._http.get<GetIp>(ENVIRONMENT.services.jsontest.apiUrls.ip + '/');
	}

	public getDateTime() {
		return this._http.get<GetDateTime>(ENVIRONMENT.services.jsontest.apiUrls.dateTime + '/');
	}
}
