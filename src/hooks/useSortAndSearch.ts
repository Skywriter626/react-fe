import { useMemo } from 'react';
import { IUser } from "../components/Users/IUser";

export const useSort = (array: IUser[], field: string) => {
    const sortedArray = useMemo(() => {
        if (field) {
            return [...array].sort((a:any, b:any) => a[field] < b[field] ? -1 : 1);
        }
        return array;
    }, [array, field]);

    return sortedArray;
};

export const useSearch = (array: IUser[], field: string, query: string) => {
    const sortedArray = useSort(array, field);

    const sortedSearchedArray = useMemo(() => {
        return sortedArray.filter(element => element.email.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedArray]);

    return sortedSearchedArray;
}


