import { backendurl } from "./config";

export const makeunautheticatedPOSTReq= async(route,body)=>{
        const response=await fetch(backendurl+route,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(body),
    });
    const formattedresponse= await response.json();
    return formattedresponse;
}
export const makeautheticatedPOSTReq= async(route,body)=>{
        const token=getToken();
        const response=await fetch(backendurl+route,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`,
            },
            body: JSON.stringify(body),
    });
    const formattedresponse= await response.json();
    return formattedresponse;
}

const getToken=()=>{
    const accessToken= document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.$/,
        "$1"
    );
    return accessToken
}
export const makeautheticatedGETReq= async(route,body)=>{
        const token=getToken();
        const response=await fetch(backendurl+route,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`,
            },
            body: JSON.stringify(body),
    });
    const formattedresponse= await response.json();
    return formattedresponse;
}