export interface user{
    email: string;
    password: string;
    passwordAgain: string;
    name: {
        firstName: string;
        lastName: string;
    }
    address: string;
}