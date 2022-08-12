import React, {useState} from 'react'
import classnames from 'classnames'
import styles from './SurveyBanner.module.scss'
import Score from './Score'
import Thanks from './Thanks'
import Welcome from './Welcome'

const surveyDefaults = {
  welcomeTitle: 'How happy were you with Menu variaty?',
  welcomeSubtitle: 'Help us to improve our service',
  subtitleIcon: 'arrow-right',
  thanksTitle: 'Thank you!',
  thanksSubtitle: 'We appreciate your feedback in order to improve the service.'
}

const SurveyBanner = ({
  showSurvey,
  handleSubmit,
  handleClose,
  welcomeTitle = surveyDefaults.welcomeTitle,
  welcomeSubtitle = surveyDefaults.welcomeSubtitle,
  thanksTitle = surveyDefaults.thanksTitle,
  thanksSubtitle = surveyDefaults.thanksSubtitle,
  isLoading
}) => {
  const [showScore, setShowScore] = useState(false)
  const [showThanks, setShowThanks] = useState(false)

  if (isLoading) return null
  if (!showSurvey) return null

  const showWelcomeMessage = !showScore && !showThanks

  const handleSubmitSurvey = (score, comment) => {
    setShowScore(false)
    setShowThanks(true)
    handleSubmit(score, comment)
  }

  const handleCloseSurvey = () => {
    setShowScore(false)
    setShowThanks(false)
    handleClose()
  }

  return (
    <div
      className={classnames(styles.surveyCard, {
        [styles.surveyStart]: showWelcomeMessage,
        [styles.surveyColor]: !showWelcomeMessage
      })}
    >
      <Welcome
        showWelcome={showWelcomeMessage}
        title={welcomeTitle}
        subtitle={welcomeSubtitle}
        setShowScore={setShowScore}
      />

      <Score
        showScore={showScore}
        title={welcomeTitle}
        handleSubmit={handleSubmitSurvey}
      />

      <Thanks
        showThanks={showThanks}
        title={thanksTitle}
        subtitle={thanksSubtitle}
        handleClose={handleCloseSurvey}
      />
    </div>
  )
}

export default SurveyBanner
