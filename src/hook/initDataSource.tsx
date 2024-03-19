import { useState, useEffect } from "react"
import type { AliasType } from "../type/AliasType"
import type { Table } from "../type/TableType"
import { get } from "../axios/http"

type TableType<T> = T extends "alias" ? AliasType : never;
const initDataSource = <T extends keyof typeof Table>(url: T) => {
    const [ dataSource, setDataSource ] = useState<TableType<typeof Table[keyof typeof Table]>[]>([]);

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

    return {
        dataSource,
        setDataSource
    }


}

export default initDataSource;