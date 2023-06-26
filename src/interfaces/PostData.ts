export interface PostData {
  id: number;
  number: number;
  repository_url: string;
  title: string;
  body: string;
  comments: number[];
  created_at: string;
  login: string;
}
