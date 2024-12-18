import { useQuery } from '@tanstack/react-query'
import { Navigate } from "react-router-dom";
import { getUser } from "../api/DevTreeApi";
import DevTree from "../components/DevTree";

export default function AppLayout() {

    const { data, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 1,
        refetchOnWindowFocus: false
    })

    if (isLoading) return 'Cargando...'
    if (isError) return <Navigate to={'/auth/login'} />

    console.log(data)


    if (data) return <DevTree data={data}/>
}