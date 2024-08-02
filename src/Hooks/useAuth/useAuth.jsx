import { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProviders/AuthPrividers'

export default function useAuth() {
    return useContext(AuthContext);
  
}
