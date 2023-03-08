// Write your code here.

import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

const myFaqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
    isAnswered: false,
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
    isAnswered: false,
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
    isAnswered: false,
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',

    isAnswered: false,
  },
]

class Faqs extends Component {
  state = {faqsList: myFaqsList}

  getFaqAnswer = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachFaq => {
        if (eachFaq.id === id) {
          return {...eachFaq, isAnswered: !eachFaq.isAnswered}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="list-item-container">
            {faqsList.map(eachFaqItem => (
              <FaqItem
                key={eachFaqItem.id}
                faqItem={eachFaqItem}
                getFaqAnswer={this.getFaqAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
