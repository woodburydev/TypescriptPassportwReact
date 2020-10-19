import React, { createContext, PropsWithChildren, useEffect, useState } from 'react'
import Axios, { AxiosResponse } from 'axios'
import { UserInterface } from '../Interfaces/Interfaces'

export const myContext = createContext<Partial<UserInterface>>({})
export default function Context(props: PropsWithChildren<any>) {
  const [user,setUser] = useState<UserInterface>()
  useEffect(() => {
    Axios.get("http://localhost:4000/user", { withCredentials: true }).then((res: AxiosResponse) => {
      setUser(res.data);
    })
  }, []);

  return (
    <myContext.Provider value={user!}>{props.children}</myContext.Provider>
    )
}
