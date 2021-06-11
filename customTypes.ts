export interface Post {
  user: string;
  title: string;
  upvotesCount: number;
  commentsCount: number;
  creationTimestamp:string;
  content:string;
  id: number;
};

export interface Subreddit {
  slug: string;
  members: number;
  online: number;
  createdAt: string;
  slogan: string;
  description: string;
  posts: Post[];
}

export interface OtherSubreddit {
  slug: string,
  members: number
}

export type SelectedSort = 'Hot' | 'New' | 'Top' | 'TripleDot' | 'CardView'
