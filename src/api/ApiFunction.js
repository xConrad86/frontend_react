const LOCAL_HOST = "http://127.0.0.1:8080"

export async function requestUser(email, password){
    try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        const data = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };   

        var response = await fetch(LOCAL_HOST + "/user", requestOptions)
        console.log(response)
        const resData = await response.status
        //console.log( resData)
        return resData;    
    } catch (error) {
        console.log("Error! something went wrong", error)
        return 500
    }
}

export async function requestResetPassword(email, link){
    try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");       

        const data = JSON.stringify({
            "email": email,
            "reset_link": link        
        });

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };
        console.log(requestOptions)
        var response = await fetch(LOCAL_HOST + "/reset-password", requestOptions)        
        const resData = await response.status
        return resData;  
    }
    catch (error) {
        console.log("Error! something went wrong", error)
        return 500
    }
}


export async function requestChangePassword(password, token){
    try{
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");    

        const data = JSON.stringify({
            "password": password,
            "reset_link": token
        });

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };
        
        var response = await fetch(LOCAL_HOST + "/reset-password/" + token , requestOptions)
        console.log(response)
        const resData = await response.status    
        return resData;  
    }  
    catch (error) {
        console.log("Error! something went wrong", error)
        return 500
    }
}