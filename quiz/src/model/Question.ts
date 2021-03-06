import {UserAnswer} from './UserAnswer'

export default interface Question {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
  user_answer: UserAnswer | undefined
}
