import { ISubsite } from "@/types/subsite.type";
import { IPost } from "@/types/post.type";

export interface IComment {
  id: number;
  likes: number;
  text: string;
  publishDate: Date;
  parent: IComment;
  children: IComment[];
  post: IPost;
  user: ISubsite;
}
