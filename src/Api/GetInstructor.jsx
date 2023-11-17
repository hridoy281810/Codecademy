import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const GetInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    data: instructor = [],
    refetch,
    isLoading: userLoading,
  } = useQuery({
    queryKey: ["instructor", user],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
      const data = res.data;
      return data;
    },
  });

  return { instructor, refetch, userLoading };
};
export default GetInstructor;
