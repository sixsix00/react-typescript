import axios from "axios"

const proxyUrl = "/api/"

const get = (url) => {
	return axios.get(proxyUrl + url);
}

const post = (url, data) => {
	return axios.post(proxyUrl + url, data);
}

const put = (url, id, data) => {
	return axios.put(proxyUrl + url + "/" + id, data);
}

const del = (url, id) => {
	return axios.delete(proxyUrl + url + "/" + id);
}

export { get, post, put, del }