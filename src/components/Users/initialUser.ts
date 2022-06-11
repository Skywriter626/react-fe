import { IUser } from "./IUser";
import { v4 as uuid4 } from "uuid";

export const initialUser: IUser = {
    id: uuid4(),
    name: '',
    username: '',
    email: '',
    //address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: ''} },
    phone: '',
    website: '',
    //company: { name: '', catchPhrase: '', bs: ''}
}