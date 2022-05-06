export interface user{
    id: string;
    email: string;
    passwordAgain: string;
    name: {
        firstName: string;
        lastName: string;
    }
    address: string;
}