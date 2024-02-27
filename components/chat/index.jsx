import styles from './style.module.scss'
import { FaArrowUp } from 'react-icons/fa'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import moment from 'moment'

const Index = () => {
  const [chatHistory, setChatHistory] = useState([{
    id: uuid(),
    text: 'dsadasdasdasdsad',
    createdAt: moment(),
    author: 'user',
  }, {
    id: uuid(),
    text: 'Avadsadasddasdasdaszov',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'DSADASDASDASDSADASDASDASDSA',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Jasur',
    createdAt: moment(),
    author: 'user',
  }, {
    id: uuid(),
    text: 'Avazov',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Avadsadasddasdasdaszov',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'DSADASDASDASDSADASDASDASDSA',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Jasur',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Avazov',
    createdAt: moment(),
    author: 'user',
  }, {
    id: uuid(),
    text: 'Avadsadasddasdasdaszov',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'DSADASDASDASDSADASDASDASDSA',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Jasur',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Avazov',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Avadsadasddasdasdaszov',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'DSADASDASDASDSADASDASDASDSA',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Jasur',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Avazov',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Avadsadasddasdasdaszov',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'DSADASDASDASDSADASDASDASDSA',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Jasur',
    createdAt: moment(),
    author: 'gpt',
  }, {
    id: uuid(),
    text: 'Avazov',
    createdAt: moment(),
    author: 'gpt',
  }])

  return (
    <div className={ styles.chatContainer }>
      <div className={ styles.chatHistoryContainer }>
        { chatHistory?.map((el, index) => (
          <p
            className={ `${ styles.chatHistoryText } ${ el.author === 'gpt' ? styles.chatHistoryAnswer : '' }` }
            key={ index }
          >
            { el.text }
            <br />
            <span className={ styles.chatHistorySpan }>
              { el.createdAt.format('hh:mm:ss') }
            </span>
          </p>
        )) }
      </div>
      <div className={ styles.chatInputContainer }>
        <input
          type={ 'text' }
          className={ styles.chatInput }
          placeholder={ 'type...' }
        >
        </input>
        <button
          type={ 'submit' }
          className={ styles.chatSubmit }
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  )
}

export default Index