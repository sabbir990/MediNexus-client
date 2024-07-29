import { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProviders/AuthPrividers'

export default function useAuth() {
    const authentications = useContext(AuthContext);

    return authentications;
  
}
