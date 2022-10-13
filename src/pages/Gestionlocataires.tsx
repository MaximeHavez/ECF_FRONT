import React, {useEffect, useState} from "react";
import UserType from "../models/UserType";
import {callUsersService} from "../services/usersServices";
import UserCard from "../layouts/userCard";

const Gestionlocataires = () => {

    const [users, setUsers] = useState<UserType[]>( [])

    useEffect(() => {
        callUsersService.findAll().then(res => setUsers(res))
    },[])



    return(
      <>
          {users.map((item,index)  =>
              <>
                <UserCard key={index} user={item}/>
              </>

          )}

      </>
  )
}

export default Gestionlocataires;