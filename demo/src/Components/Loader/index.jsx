import React from 'react'

const Loader = () => (
  <div>
    <section className="o-section-md">
      <h4>Loaders</h4>
      <div className="c-icon">
        <svg className="c-icon__svg" version="1.1" id="loader" x="0" y="0" viewBox="0 0 50 50" style={{ 'enable-background': 'new 0 0 50 50' }}>
          <path fill="#8bc34a" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
      <div className="c-icon">
        <svg className="c-icon__svg c-icon__svg--left" version="1.1" id="loader-left" x="0" y="0" viewBox="0 0 50 50" style={{ 'enable-background': 'new 0 0 50 50' }}>
          <path fill="#8bc34a" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <span className="c-icon__text">Loading...</span>
      </div>
      <div className="c-icon">
        <span className="c-icon__text">Loading...</span>
        <svg className="c-icon__svg c-icon__svg--right" version="1.1" id="loader-right" x="0" y="0" viewBox="0 0 50 50" style={{ 'enable-background': 'new 0 0 50 50' }}>
          <path fill="#8bc34a" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </section>
  </div>
)

export default Loader
