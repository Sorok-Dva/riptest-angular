export interface GetPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface CreatePost {
	userId: number;
	title: string;
	body: string;
}


