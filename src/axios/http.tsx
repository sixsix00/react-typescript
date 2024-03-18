import axios from "axios"

const get = (url) => {
	return axios.get(url);
}

const post = (url, data) => {
	return axios.post(url, data);
}

const put = (url, data) => {
	return axios.put(url, data);
}

const del = (url) => {
	return axios.delete(url);
}

export { get, post, put, del }