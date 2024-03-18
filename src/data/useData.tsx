import { get } from "../axios/http"
import type { AliasType } from "../type/AliasType";
import { useState, useEffect } from "react"

export const queryData = (url: string) => {
	const [dataSource, setDataSource] = useState<AliasType[]>([])
	useEffect(() => {
		get("/api/"+url).then(res=>{
			if(res.data) {
				console.log("~~~~~~~!")
				setDataSource((prev)=> [
					...prev,
					...res.data
				])
			}
		})
	}, [url]);

	return { dataSource, setDataSource }
}

