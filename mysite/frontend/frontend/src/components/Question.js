import React from 'react'

function Question(props) {

    console.log({props})

    return (
        <div>
            Question: { props.data.question_text } { props.data.pubdate }
        </div>
    )
}

export default Question