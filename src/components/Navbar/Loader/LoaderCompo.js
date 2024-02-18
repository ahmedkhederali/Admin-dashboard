import React from 'react'
import "./style.css"
export default function LoaderCompo() {
  return (
    <div id="preloader">
        <div id="ctn-preloader" class="ctn-preloader">
          <div class="animation-preloader">
            <div class="spinner"></div>
            <div class="txt-loading">
              <span  class="letters-loading"> Q </span>
              <span class="letters-loading"> I </span>
              <span  class="letters-loading"> A </span>
              <span class="letters-loading"> S </span>
            </div>
          </div>
          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
        </div>
      </div>
  )
}
