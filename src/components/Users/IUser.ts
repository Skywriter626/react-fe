export interface IUser {
    id: number | string;
    name: string;
    username: string;
    email: string;
    address?: IAddress;
    phone: string;
    website: string;
    company?: {name: string; catchPhrase: string; bs: string}
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}