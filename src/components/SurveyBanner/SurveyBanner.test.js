import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SurveyBanner from './index'

describe('SurveyBanner', () => {
  it('Hide Survey', () => {
    const title = 'T!tl3'
    const subtitle = '5u8t!tl3'

    render(
      <SurveyBanner
        welcomeTitle={title}
        welcomeSubtitle={subtitle}
        showSurvey={false}
      />
    )
    expect(screen.queryByTestId('SurveyBanner')).not.toBeInTheDocument()
  })

  it('Close banner by clicking button', () => {
    const welcomeTitle = 'T!tl3'
    const welcomeSubtitle = '5u8t!tl3'
    const thanksTitle = 'T!tl3 Th@nk5'
    const thanksSubtitle = '5u8t!tl3 Th@nk5'
    const handleSubmit = () => {
      console.log('submit')
    }
    const handleClose = () => {
      console.log('close')
    }

    render(
      <SurveyBanner
        welcomeTitle={welcomeTitle}
        welcomeSubtitle={welcomeSubtitle}
        thanksTitle={thanksTitle}
        thanksSubtitle={thanksSubtitle}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        showSurvey
      />
    )

    expect(screen.queryByTestId('angry-score-button')).toBeVisible()
    userEvent.click(screen.queryByTestId('angry-score-button'))

    expect(screen.queryByTestId('comments-section')).toBeVisible()
    userEvent.click(screen.queryByTestId('comment-button'))

    expect(screen.queryByTestId('thanks-message')).toBeVisible()
    expect(screen.getByText(thanksTitle)).toBeVisible()
    expect(screen.getByText(thanksSubtitle)).toBeVisible()

    userEvent.click(screen.queryByTestId('close-button'))
    expect(screen.queryByTestId('thanks-message')).not.toBeInTheDocument()
  })

  describe('Mobile', () => {
    it('Show Survey with Welcome message', () => {
      const title = 'T!tl3'
      const subtitle = '5u8t!tl3'

      render(
        <SurveyBanner
          welcomeTitle={title}
          welcomeSubtitle={subtitle}
          isMobile
          showSurvey
        />
      )
      expect(screen.queryByTestId('SurveyBanner')).toBeVisible()

      expect(screen.getByTestId('welcome-title')).toHaveTextContent(title)
      expect(screen.getByTestId('welcome-subtitle')).toHaveTextContent(subtitle)
    })

    it('Show score input after welcome', () => {
      const welcomeTitle = 'T!tl3'
      const welcomeSubtitle = '5u8t!tl3'

      render(
        <SurveyBanner
          welcomeTitle={welcomeTitle}
          welcomeSubtitle={welcomeSubtitle}
          isMobile
          showSurvey
        />
      )
      expect(screen.queryByTestId('SurveyBanner')).toBeVisible()
      userEvent.click(screen.queryByTestId('show-score-link'))

      expect(screen.queryByTestId('angry-score-button')).toBeVisible()
      userEvent.click(screen.queryByTestId('angry-score-button'))

      expect(screen.queryByTestId('comments-section')).toBeVisible()
    })
  })

  describe('Web', () => {
    it('Show Survey without Welcome message', () => {
      const title = 'T!tl3'
      const subtitle = '5u8t!tl3'

      render(
        <SurveyBanner
          welcomeTitle={title}
          welcomeSubtitle={subtitle}
          isMobile={false}
          showSurvey
        />
      )
      expect(screen.queryByTestId('SurveyBanner')).toBeVisible()
      expect(screen.queryByTestId('angry-score-button')).toBeVisible()
    })
  })
})
