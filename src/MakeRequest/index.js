const makeRequest = async (verb, URL, data, userSecrets) => {
    try{
        if (!data && (verb === "POST" || verb === "PUT" || verb === "PATCH")) {
          throw new Error("No data object provided")
        }
        if (verb !== "POST" && verb !== "GET" && verb !== "PUT" && verb !== "PATCH" && verb !== "DELETE") {
            throw new Error("Invalid verb provided")
        }

        if (verb === "POST" || verb === "PUT" || verb === "PATCH" || verb === "DELETE") {
            const response = await fetch(URL, {
                headers: {
                    'Authorization': `token: ${userSecrets.token} userId: ${userSecrets.userId}`, 
                },
                method: verb,
                body: data
            });
            return response.json();
        } else {
            const response = await fetch(URL, {
                headers: {
                    'Authorization': `token: ${userSecrets.token} userId: ${userSecrets.userId}`, 
                }
            });
            return response.json();
        }
    } catch (error) {
        console.log(error)
        console.error('Error:', error);        
    }
}

const makeRequestNoFile = async (verb, URL, data, userSecrets) => {
    try {
        const response = await fetch(URL, {
          method: verb, //POST or 'PUT' or PATCH
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `token: ${userSecrets.token} userId: ${userSecrets.userId}`, 
            }
        });
        return await response.json();
    } catch (error) {
        console.log(error)
        console.error('Error:', error);        
    }    
}

export default { makeRequest, makeRequestNoFile }