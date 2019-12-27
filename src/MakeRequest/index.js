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

export default { makeRequest }