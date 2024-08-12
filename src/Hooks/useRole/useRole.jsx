import useAuth from '../useAuth/useAuth'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

export default function useRole() {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data : role, isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled : !loading || !!user,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/${user?.email}`);
            return data?.role;
        }
    })
    return {role, isLoading}
}
