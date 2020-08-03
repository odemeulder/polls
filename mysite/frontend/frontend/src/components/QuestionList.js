import React, { useState, useEffect } from 'react'
import Question from './Question'
import { QuestionApi } from '../api/questionApi'

function QuestionList() {

    const [questions, setQuestions] = useState([])

    useEffect(async () => {
        setQuestions(await QuestionApi.getAll())
    }, [])

    return (
        <div>
            <h1>Questions: </h1>
            {questions.map((q, i) => <Question key={i} data={q}></Question>)}
        </div>
    )
}

export default QuestionList