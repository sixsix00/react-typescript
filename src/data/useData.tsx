import { get, put, post, del } from "../axios/http"
import type { AliasType } from "../type/AliasType";
import type { Table } from "../type/TableType"
import { Modal } from "antd"


type TableType<T> = T extends "alias" ? AliasType : never;
const warning = (id:string, title) => {
	Modal.warning({
		title: title + "資料",
		content: `[id: ${id}]資料已成功${title}...`,
	});
};


const useData = (setDataSource) => {
	
	const addData = <T extends keyof typeof Table>(url: T, data: TableType<typeof Table[T]>) => {
		post(url, data).then(()=>{
			setDataSource((prev)=> [
				...prev,
				data
			])
		})

	}

	const putData = <T extends keyof typeof Table>(url: T, id: string, data: TableType<typeof Table[T]>) => {
		put(url, id, data).then(res=>{
			setDataSource((prev)=>{
				const arr = prev.filter(item => item.id != res.data.id)
				arr.push(res.data)
				return arr
			})
			warning(res.data.id, '修改')
		})
	}

	const delData = <T extends keyof typeof Table>(url: T, id: string) => {
		del(url, id).then((res)=>{
			setDataSource((prev)=> {
				return prev.filter(item => item.id != res.data.id)
			})
			warning(res.data.id, '刪除')
		})
	}

	return {
		addData,
		putData,
		delData
	}

}

export default useData
