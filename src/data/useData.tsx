import { get, put, post, del } from "../axios/http"
import type { AliasType } from "../type/AliasType";
import type { Table } from "../type/TableType"
import { useState, useEffect } from "react"
import { Modal, Space, Input } from "antd"
import datex from 'datex.js';


type TableType<T> = T extends "alias" ? AliasType : never;
const warning = (id:string) => {
	Modal.warning({
		title: '刪除資料',
		content: `[id: ${id}]資料已成功刪除...`,
	});
};


const useData = () => {
	const [dataSource, setDataSource] = useState<AliasType[]>([])
	const queryData = <T extends keyof typeof Table>(url: T) => {
		useEffect(() => {
			get(url).then(res=>{
				if(res.data) {
					setDataSource((prev)=> [
						...prev,
						...res.data
					])
				}
			})
		}, [url]);

		return { dataSource, setDataSource }
	}

	const addData = <T extends keyof typeof Table>(url: T, data: TableType<typeof Table[T]>) => {
		post(url, data).then(()=>{
			setDataSource((prev)=> [
				...prev,
				data
			])
		})

	}

	const putData = <T extends keyof typeof Table>(url: T, id: string, data: TableType<typeof Table[T]>) => {
		put(url, id, data).then(res=>[
			setDataSource((prev)=>[
				...prev,
				{
					...res.data,
					...{
						"edited": {
							date: datex(new Date()).format("YYYY/MM/DD"),
							time: datex(new Date()).format("HH:mm:ss"),
						},
					}
				},
			])
		])
	}

	const delData = <T extends keyof typeof Table>(url: T, id: string) => {
		del(url, id).then((res)=>{
			setDataSource((prev)=> {
				return prev.filter(item => item.id != res.data.id)
			})
			warning(res.data.id)
		})
	}

	return {
		queryData,
		addData,
		putData,
		delData
	}

}

export default useData
