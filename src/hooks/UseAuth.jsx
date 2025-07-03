import { useContext } from "react"
import AuthContext from "../context/AuthContext/AuthContext"

//make hooks
const useAuth =()=>{
  const context = useContext(AuthContext);
  return context;
}

export default useAuth;