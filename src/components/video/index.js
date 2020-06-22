// Package
import React, { lazy, Suspense, Component } from "react"
import "./video.css"

// Lazy components
const VideoContent = lazy(() => "videoContent.js")

export default class VideoComp extends Component {
  state = {
    content: null,
  }
  render() {
    const importVideoContent = data => {
      return (
        <Suspense fallback="Loading Video">
          <VideoContent src={data} />
        </Suspense>
      )
    }
    const renderVideo = data => {
      this.setState({
        content: importVideoContent(data),
      })
    }
    return (
      <div>
        <button
          onClick={() => {
            renderVideo({
              width: "672",
              heigh: "40",
              src: "https://www.youtube.com/embed/-sT1f1Se_9g",
            })
          }}
        >
          Click to Load the video
        </button>
        {this.state.content && (
          <div className="content">{this.state.content}</div>
        )}
      </div>
    )
  }
}
