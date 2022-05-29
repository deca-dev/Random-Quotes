import React from 'react'

const QuoteBox = ({ quoteRandom, colorRandom, clickButton }) => {
    const styleButton = {
        backgroundColor: colorRandom
    }
    return (
        <article className='card' style={{ color: colorRandom }}>
            <div className='quoteText__container'><span className='dobleQuotation'>&#8220; </span><span className='quotePhrase'>{quoteRandom.quote}</span></div>
            <p className='authorName'><i>{quoteRandom.author}</i></p>
            <button style={styleButton}
                className='card__btn'
                onClick={clickButton}
            >&#62;
            </button>
        </article>
    )
}

export default QuoteBox