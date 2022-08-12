import React, {useState} from 'react'
import CUButton from '../../common/CUButton'
import images from '../../assets/images'
import styles from './SurveyBanner.module.scss'

const commentsPlaceholderDefault = 'Tell us a bit more about it'

const Score = ({
  showScore,
  title,
  commentsPlaceholder = commentsPlaceholderDefault,
  handleSubmit
}) => {
  const [score, setScore] = useState(0)
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState('')

  if (!showScore) return null

  const handleScoreClick = newScore => {
    setScore(newScore)
    setShowComments(true)
  }

  const handleChangeComment = event => {
    setComment(event.target.value)
  }

  const handleSubmitScore = () => {
    handleSubmit(score, comment)
    setScore(0)
    setComment('')
    setShowComments(false)
  }

  return (
    <div id="score">
      <h4>{title}</h4>
      <div className={styles.facesContainer}>
        <img
          src={images.face1}
          alt="angry"
          onClick={() => handleScoreClick(1)}
          className={score === 1 ? styles.selected : null}
        />
        <img
          src={images.face2}
          alt="frown"
          onClick={() => handleScoreClick(2)}
          className={score === 2 ? styles.selected : null}
        />
        <img
          src={images.face3}
          alt="annoyed"
          onClick={() => handleScoreClick(3)}
          className={score === 3 ? styles.selected : null}
        />
        <img
          src={images.face4}
          alt="smile"
          onClick={() => handleScoreClick(4)}
          className={score === 4 ? styles.selected : null}
        />
        <img
          src={images.face5}
          alt="grin"
          onClick={() => handleScoreClick(5)}
          className={score === 5 ? styles.selected : null}
        />
      </div>

      {showComments && (
        <div className={styles.commentsContainer}>
          <div className={styles.center}>
            <textarea
              className={styles.comments}
              rows="4"
              placeholder={commentsPlaceholder}
              value={comment}
              onChange={handleChangeComment}
            />
          </div>

          <div className={styles.center}>
            <CUButton onClick={handleSubmitScore} label="Submit" primary>
              Submit
            </CUButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default Score
