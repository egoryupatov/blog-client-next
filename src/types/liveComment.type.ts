export interface ILiveComment {
  id: number;
  text: string;
  user: {
    id: number;
    login: string;
    avatar: string;
  };
  post: {
    id: number;
    title: string;
  };
}
