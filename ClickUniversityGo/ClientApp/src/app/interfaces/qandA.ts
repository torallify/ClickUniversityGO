export interface Answer {
  id: number;
  userName: string;
  detail: string;
  questionId: number;
  posted: Date;
  upvotes: number;

}

export interface Question {
  id: number;
  userName: string;
  title: string;
  detail: string;
  posted: Date;
  category: string;
  tags: string;
  status: number;
};
