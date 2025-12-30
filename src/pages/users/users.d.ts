export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email?: string;
    avatar?: string;
    dob?: string;
}

export interface ICounts {
    users: number;
    coffes: number;
    desserts: number;
    teas: number;
}
