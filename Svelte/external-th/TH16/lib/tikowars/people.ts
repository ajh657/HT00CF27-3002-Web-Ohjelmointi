export interface People {
	message: string;
	total_records: number;
	total_pages: number;
	next: string;
	results: PeopleResult[];
	apiVersion: string;
	timestamp: string;
}

export interface PeopleResult {
	uid: string;
	name: string;
	url: string;
}
