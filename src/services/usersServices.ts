
export class usersServices  {

    findAll = async () => {
        const response =  await fetch('http://localhost:3000/users');
        const data = await response.json();
        return data;
    }

    findUserById = async (id:string) => {
        const response =  await fetch(`http://localhost:3000/users/${id}`);
        const data = await response.json();
        return data;
    }


}

export const callUsersService = Object.freeze(new usersServices())