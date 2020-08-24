import * as React from 'react';

interface QuestionProps {
    children: any,
}

const QuestionTypeBox = (props: QuestionProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default QuestionTypeBox;
