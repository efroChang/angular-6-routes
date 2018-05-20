
/*
*   This is a FAKE Service to pretend user Log in/out authentication.
*/
export class AuthService
{
    loggedIn = false;

    // [KEY] To fake the authentication takes a few seconds
    isAuthenticated()
    {
        const authPromise = new Promise
        (
            ( resolve, reject ) => 
            {
                setTimeout
                ( 
                    () => { resolve( this.loggedIn ); }, 
                    1000
                );
            }
        );

        return authPromise;
    }

    login()
    {
        this.loggedIn = true;
    }

    logout()
    {
        this.loggedIn = false;
    }

}