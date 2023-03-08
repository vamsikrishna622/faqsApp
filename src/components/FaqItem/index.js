// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqItem, getFaqAnswer} = props
  const {questionText, answerText, id, isAnswered} = faqItem

  const plusImgUrl =
    'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const minusImgUrl =
    'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

  const imgUrl = isAnswered ? minusImgUrl : plusImgUrl
  const altText = isAnswered ? 'minus' : 'plus'

  const getAnswer = () => {
    getFaqAnswer(id)
  }

  return (
    <li className="faq-item-container">
      <div className="question-icon-container">
        <h1 className="question-text">{questionText}</h1>
        <button type="button" className="button" onClick={getAnswer}>
          <img alt={altText} src={imgUrl} className="icon" />
        </button>
      </div>
      {isAnswered && (
        <div>
          <hr className="line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
