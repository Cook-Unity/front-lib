import React, {useState} from 'react'
import classnames from 'classnames'
import styles from './SurveyBanner.module.scss'
import Score from './Score'
import Thanks from './Thanks'
import Welcome from './Welcome'

const surveyDefaults = {
  welcomeTitle: 'Rate your satisfaction with this week’s meals',
  welcomeSubtitle: 'Help us to improve our service',
  subtitleIcon: 'arrow-right',
  thanksTitle: 'Thank you!',
  thanksSubtitle: 'We appreciate your feedback in order to improve the service.'
}

const SurveyBanner = ({
  showSurvey,
  isMobile = false,
  handleStartSurvey = null,
  handleSubmit,
  handleClose,
  welcomeTitle = surveyDefaults.welcomeTitle,
  welcomeSubtitle = surveyDefaults.welcomeSubtitle,
  thanksTitle = surveyDefaults.thanksTitle,
  thanksSubtitle = surveyDefaults.thanksSubtitle,
  isLoading
}) => {
  const [showScore, setShowScore] = useState(!isMobile)
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
    setShowScore(!isMobile)
    setShowThanks(false)
    handleClose()
  }

  const startSurvey = () => {
    setShowScore(true)
    if (handleStartSurvey) {
      handleStartSurvey()
    }
  }

  return (
    <div
      data-testid="SurveyBanner"
      className={classnames(styles.surveyCard, {
        [styles.surveyStart]: showWelcomeMessage,
        [styles.surveyColor]: !showWelcomeMessage
      })}
    >
      <Welcome
        showWelcome={showWelcomeMessage}
        isMobile={isMobile}
        title={welcomeTitle}
        subtitle={welcomeSubtitle}
        setShowScore={startSurvey}
      />

      {!showThanks && (
        <Score
          showScore={showScore}
          title={welcomeTitle}
          handleSubmit={handleSubmitSurvey}
        />
      )}

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
