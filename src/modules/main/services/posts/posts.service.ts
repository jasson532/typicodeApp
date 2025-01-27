import axios from "axios";
import { IPosts } from "./posts.type";

export const getPostsApi = (): Promise<IPosts[]> => {
	return axios
		.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.data);
};
