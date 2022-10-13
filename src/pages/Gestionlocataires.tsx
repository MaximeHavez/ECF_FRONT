import React, {useEffect, useState} from "react";
import UserType from "../models/UserType";
import {callUsersService} from "../services/usersServices";
import UserCard from "../layouts/userCard";
import {Link} from "react-router-dom";

const Gestionlocataires = () => {

    const [users, setUsers] = useState<UserType[]>( [])

    useEffect(() => {
        callUsersService.findAll().then(res => setUsers(res))
    },[])



    return(
      <>
          <Link className="btn-floating right btn-large waves-effect waves-light red" to="/FormulaireAjout"><i className="material-icons">+</i></Link>
          {users.map((item,index)  =>
              <>
                <UserCard key={index} user={item}/>
              </>

          )}

      </>
  )
}

export default Gestionlocataires;