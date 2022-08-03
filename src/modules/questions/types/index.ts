export interface Question {
    text: string;
    answer: string;
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
}