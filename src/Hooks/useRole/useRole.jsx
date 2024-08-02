import useAuth from '../useAuth/useAuth'
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../useAxiosCommon/useAxiosCommon';

export default function useRole() {
    const { user, loading } = useAuth();
    const axiosCommon = useAxiosCommon()

    const { data } = useQuery({
        queryKey: ['role', user?.email],
        enabled : !loading || !!user,
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/user/${user?.email}`);
            console.log(data);
            return data;
        }
    })
    return data
}
