import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonplaceholderService } from '../../services/jsonplaceholder/jsonplaceholder.service';

@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.scss']
})

export class NewPostComponent {
	public newPostForm: FormGroup;
	public loading = false;
	public success = false;
	public postId: number;

	constructor(
		private formBuilder: FormBuilder,
		private newPostService: JsonplaceholderService,
	) {
		this.newPostForm = this.formBuilder.group({
			title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
			content: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(600)]]
		});
	}

	onSubmit(): void {
		if (this.newPostForm.invalid) {
			return;
		}

		this.loading = true;
		this.newPostService.createPost({
			title: this.newPostForm.get('title').value,
			body: this.newPostForm.get('content').value,
			userId: 3
		}).subscribe(
			(response) => {
				this.postId = response.id;
				this.success = true;
				this.loading = false;
			},
			(error) => {
				console.error(error);
				this.loading = false;
			}
		);
	}
}
