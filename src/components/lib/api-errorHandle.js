export const handleApiError = (response)=>{
    if(!response.ok){
        throw Error(response.statusText)
    }else{
        return response
    }
}