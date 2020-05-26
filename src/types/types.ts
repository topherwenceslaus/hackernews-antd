export type NewsType = {
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string;
};

export type initialNewsState = {
  news: NewsType[];
};

export type LoadingStateType = {
  loading: boolean;
};

export type ErrorType = {
  isError: boolean;
  errorMessage: string;
};
