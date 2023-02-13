export interface IPostFeed {
  id: number;
  publishDate: Date;
  title: string;
  description: string;
  image: string;
  likes: number;
  user: {
    login: string;
  };
  comments: number;
  category: {
    name: string;
    image: string;
  };
}
