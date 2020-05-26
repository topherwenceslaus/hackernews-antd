export type NewsType = {
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string;
};

export type initialNewsState = {
  news: NewsType[];
  loading: boolean;
  isError: boolean;
  errorMessage: string;
};
