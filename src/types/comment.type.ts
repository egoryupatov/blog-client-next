import { IUser } from "@/types/user.types";
import { IPost } from "@/types/post.types";

export interface IComment {
  id: number;
  likes: number;
  text: string;
  publishDate: Date;
  parent: IComment;
  children: IComment[];
  post: IPost;
  user: IUser;
}
