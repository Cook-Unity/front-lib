import React, {useState} from 'react'
import classnames from 'classnames'
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

  const scoreShowClass = showScore ? '' : styles.hide
  const commentShowClass = showComments ? '' : styles.hide

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
    <div id="score" className={scoreShowClass}>
      <h4 className={scoreShowClass}>{title}</h4>
      <div className={classnames(styles.facesContainer, scoreShowClass)}>
        <img
          src={images.face1}
          alt="angry"
          onClick={() => handleScoreClick(1)}
          data-testid="angry-score-button"
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

      <div
        className={classnames(styles.commentsContainer, commentShowClass)}
        data-testid="comments-section"
      >
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
          <CUButton
            onClick={handleSubmitScore}
            label="Submit"
            primary
            data-testid="comment-button"
          >
            Submit
          </CUButton>
        </div>
      </div>
    </div>
  )
}

export default Score
