import React from 'react'
import classnames from 'classnames'
import {pathOr} from 'ramda'

import images from '../../assets/images'

import './Gauge.css'

class Gauge extends React.Component {
  constructor(props) {
    super(props)
    this.gaugeContainer = React.createRef()
    this.timeout = 300
    this.timer = null

    this.state = {
      gaugeWidth: null
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)

    this.setState({
      gaugeWidth: pathOr(0, ['current', 'offsetWidth'], this.gaugeContainer)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    clearInterval(this.timer)
    this.timer = setTimeout(() => {
      if (this.gaugeContainer) {
        this.setState({
          gaugeWidth: pathOr(0, ['current', 'offsetWidth'], this.gaugeContainer)
        })
      }
    }, this.timeout)
  }

  getProgress = x => {
    const progress = Math.abs(x)

    if (progress > 100) {
      return 100
    } else if (progress < 0) {
      return 0
    }

    return progress
  }

  formatProgress = x => `${x}%`

  render() {
    const {protein, carbs, fat, calories, dv, className, style} = this.props
    const {gaugeWidth} = this.state

    const _gaugeWidth_ = gaugeWidth > 400 ? 350 : gaugeWidth

    const center = Math.floor(_gaugeWidth_ / 2)
    const radius = Math.abs(center - 20)
    const strokeDasharray = 2 * Math.PI * radius

    const fatPercentage = this.getProgress(fat) || 0
    const carbsPercentage = this.getProgress(carbs) + fatPercentage || 0
    const proteinPercentage = this.getProgress(protein) + carbsPercentage || 0

    const proteinOffset = strokeDasharray * (1 - proteinPercentage / 100) || 0
    const carbsOffset = strokeDasharray * (1 - carbsPercentage / 100) || 0
    const fatOffset = strokeDasharray * (1 - fatPercentage / 100) || 0

    return (
      <div
        ref={this.gaugeContainer}
        className={classnames('cookunity__macros_gauge', className)}
        style={style}
      >
        <div className="label">
          <img src={images.faiaImage} alt="calories icon" />
          <p className="calories">{calories || 0}</p>
          <p className="calories_label">Calories</p>
          <p className="daily_value">{`${Math.floor(dv || 0)}% DV`}</p>
        </div>
        <svg
          className="radial_gauge"
          width={_gaugeWidth_}
          height={_gaugeWidth_}
          viewBox={`0 0 ${_gaugeWidth_ || 0} ${_gaugeWidth_ || 0}`}
        >
          <circle
            className={classnames('track', {empty: !Math.floor(dv)})}
            cx={center}
            cy={center}
            r={radius}
            fill="none"
          />
          <circle
            className="progress-bar protein"
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={proteinOffset}
          />
          <circle
            className="progress-bar carbs"
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={carbsOffset}
          />
          <circle
            className="progress-bar fat"
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={fatOffset}
          />
        </svg>
      </div>
    )
  }
}

export default Gauge
