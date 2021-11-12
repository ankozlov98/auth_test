type loginPackage = {
    UserName: string,
    email: string,
    password: string
}

type authPackage = {
    email: string,
    password: string
}

export type registerResponse = {
    id: string,
    authToken: string,
    expiresIn: number
}

let token = localStorage.getItem('authToken') 


export const register = (info: loginPackage) => {
    return fetch('http://primer.one/api/v1/Account/Registration',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(info) 
      }).then(res => res.json())
}

export const authorize = (pack: authPackage) => {
    return fetch('http://primer.one/api/v1/Account/Login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            
          },
          body: JSON.stringify(pack) 
        }).then(res => res.json())
}

export const getInfo = () => {
    const tokenValue = token  ? token : 'Pseudo'
    return fetch('http://primer.one/api/v1/Account/UserInfo',{
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + btoa(tokenValue)
        }
    }).then(res => console.log(res.json()))
}
