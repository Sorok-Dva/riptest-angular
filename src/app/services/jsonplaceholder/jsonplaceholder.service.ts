import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENVIRONMENT } from '../../../environments/environment';
import { CreatePost } from './jsonplaceholder.type';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class JsonplaceholderService {
	constructor(
		private _http: HttpClient,
	) {}

	public createPost(post: CreatePost): Observable<any> {
		return this._http.post<CreatePost>(ENVIRONMENT.services.jsonplaceholder.apiUrls.newPost, post);
	}
}
