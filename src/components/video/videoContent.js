// Package
import React, { Component } from "react"

export default class VideoContentComp extends Component {
  render() {
    return (
      <iframe
        width={this.props.data.width}
        height={this.props.data.height}
        src={this.props.data.src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )
  }
}
