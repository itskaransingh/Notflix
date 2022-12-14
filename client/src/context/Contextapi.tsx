import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { json, useNavigate } from "react-router-dom";

const Notflixcrud = createContext("");

export const ContextProvider = ({ children }) => {
  const [lists, setLists] = useState([])
  const [content, setContent] = useState([])
  const [ser, setSer] = useState(false)
  const navigate = useNavigate();

  const queryClient = useQueryClient();

// createing user

  const newuser = async (udata: object) => {
    return await axios.post(
      "http://localhost:8800/server/auth/register",
      udata
    );
  };

// login

  const login = async (udata: object) => {
    return await axios.post("http://localhost:8800/server/auth/login", udata);
  };

// Get list 

  const getlist = async () => {
    const l = await axios.get("http://localhost:8800/server/lists/", {
      headers: { key: `bearer ${localStorage.getItem("accesstoken")}` },
    });
    return l.data;
  };


  //Get corousal movies

  const cmovies = async () => {
    const mov = await axios.get(`http://localhost:8800/server/movies/random${ser ? "?series":''}`, {
      headers: { key: `bearer ${localStorage.getItem("accesstoken")}` },
    });
    return mov.data;
  };



  const adduser = useMutation(newuser, { onSuccess: () => navigate("/") });
  const loginuser = useMutation(login, {
    onSuccess: (data) => {
      JSON.stringify(
        localStorage.setItem("accesstoken", data.data.accesstoken)
      ),
        console.log(data),
        navigate("/");
    },
    onError: (err) => console.log(err.response.data),
  });
   useQuery("lists", getlist,{onSuccess:(data)=>setLists(data)});
   useQuery("content", cmovies,{onSuccess:(data)=>setContent(data)});

  const state = { adduser, loginuser,lists,content,setSer };
  return <Notflixcrud.Provider value={state}>{children}</Notflixcrud.Provider>;
};

export const Ncontext = () => {
  return useContext(Notflixcrud);
};
