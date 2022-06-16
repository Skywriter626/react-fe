import { IPost } from "./IPost";
import { v4 as uuid4 } from "uuid";

export const initialPost: IPost = {
    userId: '',
    id: uuid4(),
    title: '',
    body: ''
}