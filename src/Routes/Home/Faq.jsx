import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

import style from './Faq.module.scss'

const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const questionsAndAnswers = [
  {
    question: 'What is the latest time I have to return the car?',
    answer: lipsum
  },
  {
    question: 'What happens if the car gets damaged?',
    answer: lipsum
  },
  {
    question: 'Can I extend the rental period?',
    answer: lipsum
  },
  {
    question: 'How did you get such an easy to use website?',
    answer: lipsum
  }
]

export const Faq = () => {
  const [activeId, setActiveId] = useState(1)

  const getQuestionStyleClasses = id => {
    return activeId === id ? `${style.accordion_question} ${style.accordion_active_question}` : style.accordion_question 
  }

  const getAnswerStyleClasses = id => {
    return activeId === id ? `${style.accordion_answer} ${style.accordion_active_answer}` : style.accordion_answer
  }

  return(
    <div className={style.faq}>
      <h1>Frequently Asked Questions</h1>
      <div className={style.accordion}>
        { questionsAndAnswers.map((questionAndAnswer, id) => {
          return(
            <>
              <div className={getQuestionStyleClasses(id)} onClick={() => setActiveId(id)}>
                <p>{questionAndAnswer.question}</p>
                <HiChevronDown />
              </div>
              <div className={getAnswerStyleClasses(id)}>
                <p>{questionAndAnswer.answer}</p>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}