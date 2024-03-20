import axios from "axios"

const server = axios.create({
	baseURL: import.meta.env.VITE_BASE_API,
	timeout: 80000
});

const get = (url) => {
	return server.get(url);
}

const post = (url, data) => {
	return server.post(url, data);
}

const put = (url, id, data) => {
	return server.put(url + "/" + id, data);
}

const del = (url, id) => {
	return server.delete(url + "/" + id);
}

export { get, post, put, del }