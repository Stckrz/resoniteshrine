// const apiUrl = 'http://localhost:8000';
const apiUrl = 'https://eager.slimyan.us'
export async function userLogin(username, password) {
    const userCredentialsObject = {
        username: username,
        password: password
    };
    try {
        const result = await fetch(`${apiUrl}/accounts/get_auth_token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userCredentialsObject)
        });
        const data = await result.json();
        console.log(data);
        return (data);
    }
    catch (error) {
        console.log("unable to login..", error);
    }
}
