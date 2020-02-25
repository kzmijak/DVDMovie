import { Movie } from "./movie.model";
import { Rating } from "./rating.model";
import { Studio } from "./studio.model";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Filter } from "./configClasses.repository";

const moviesUrl = "/api/movies"
@Injectable()
export class Repository {
 
	private filterObject = new Filter();
	constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
				this.filter.category = "drama";
				this.filter.related = true;
				this.getMovies(this.filter.related);
	}
	getMovie(id: number) {
		//console.log("Movie Data Requested");
		this.http.get(moviesUrl + "/" + id)
				.subscribe(response => {this.movie = response});
	}
	getMovies(related = false)
	{
		let url = moviesUrl + "?related=" + this.filter.related;
		if(this.filter.category)
		{
			url += "&category=" + this.filter.category;
		}
		if(this.filter.search)
		{
			url += "&search=" + this.filter.search;
		}

		this.http.get<Movie[]>(url)
		.subscribe(response => this.movies = response);
	}

	movie: Movie;
	movies: Movie[];
	get filter(): Filter{
		return this.filterObject;
	}
}