import {IUser} from "../users";


export class UsersModel {
    public id!:number;
    public firstName!: string;
    public lastName!: string;
    public email?: string;
    public avatar?: string;
    public dob?: string;

    constructor(responseData:IUser) {
        this._setId(responseData);
        this._setFirstName(responseData);
        this._setLastName(responseData);
        this._setEmail(responseData);
        this._setAvatar(responseData);
        this._setDob(responseData);
    }

    private _setId({id}:IUser){
        this.id = id;
    }
    private _setFirstName({firstName}:IUser){
        this.firstName = firstName;
    }
    private _setLastName({lastName}:IUser){
        this.lastName = lastName;
    }
    private _setEmail({email}:IUser){
        this.email = email;
    }
    private _setAvatar({avatar}:IUser){
        this.avatar = avatar;
    }
    private _setDob({dob}:IUser){
        this.dob = dob;
    }
}