export interface Answer {
  id: number;
  email: string;
  detail: string;
  questionId: number;
  posted: Date;
  upvotes: number;

}

export interface Question {
  id: number;
  email: string;
  title: string;
  detail: string;
  posted: Date;
  category: string;
  tags: string;
  status: number;
};
