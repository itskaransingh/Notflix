import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {Ncontext} from '../context/Contextapi'

type FormValues = {
  username: string;
  password: string;
  email: string;
};
const Signup = () => {
  // const [formdata, setFormdata] = useState({})
  const {adduser} = Ncontext()
  const { register, handleSubmit } = useForm<FormValues>();
  // const onSubmit: SubmitHandler<FormValues> = data => ;


  return (
    <form onSubmit={handleSubmit((data)=>{adduser.mutate(data)})}  className='flex flex-col gap-5 w-screen
     h-screen bg-gray-800'>
      <input required {...register("username")}  />
      <input required {...register("password")} />
      <input required type="email"  {...register("email")} />

      <input type="submit" className="px-3 py-2 bg-blue-300"/>
    </form>
  );
}

export default Signup