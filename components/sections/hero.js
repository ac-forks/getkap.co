import Section from '../section'

const Info = () => (
  <div>
    <a href="https://github.com/wulkano/kap">View and contribute on GitHub</a>
    <span> macOS 10.12 or later required</span>
    <style jsx>{`
      div {
        width: 390px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 32px;
      }
      a {
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        color: #ffffff;
      }
      span {
        opacity: 0.8;
        font-size: 12px;
        font-weight: normal;
        line-height: 1.33;
      }
    `}</style>
  </div>
)

const KapWindow = () => (
  <div>
    <style jsx>{`
      div {
        background: url(/static/images/kap-window@2x.png);
        background-size: contain;
        width: 320px;
        height: 180px;
        box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
        z-index: 100;
        transform: translateY(50%);
        position: relative;
      }
    `}</style>
  </div>
)

const DownloadButton = () => (
  <a href="https://github.com/wulkano/kap/releases/download/v2.0.0/Kap-2.0.0.dmg">
    <img src="/static/images/download.svg" />
    <span>Get kap</span>
    <style jsx>{`
      a {
        text-transform: uppercase;
        color: #7247ff;
        display: flex;
        align-items: center;
        background: #fff;
        padding: 16px;
        border-radius: 4px;
      }
      span {
        margin-left: 0.8em;
        font-size: 12px;
        font-weight: bold;
      }
    `}</style>
  </a>
)

const Logo = () => <img src="/static/images/kap.svg" title="Kap" />

export default () => (
  <Section height="640px">
    <div className="gradient">
      <div className="header">
        <div>
          <Logo />
        </div>
        <div>
          <DownloadButton />
        </div>
      </div>
      <div className="center">
        <h1>Capture your screen</h1>
        <h2>An open-source screen recorder built with web technology.</h2>
        <Info />
      </div>
      <KapWindow />
      <div className="curve" />
    </div>
    <style jsx>{`
      .gradient {
        background-color: #7247ff;
        flex: 1;
        height: 100%;
        background: linear-gradient(45deg, #7247ff, #00ffbe);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
      }
      @media only screen and (max-width: 600px) {
        .curve {
          // width: 100%;
          background: red;
        }
      }
      .curve {
        // FIXME: this was hard
        background: url(/static/images/curve-mobile.svg) no-repeat;
        width: 100vw;
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        height: 200px;
        transform-origin: bottom;
        background-size: cover;

        background-repeat: no-repeat;
        background-position: center bottom;
      }
      .center {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 48px;
      }
      h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.33;
        max-width: 448px;
        text-align: center;
      }
      h1 {
        font-size: 1em;
        line-height: 64px;
        font-weight: 500;
        margin-bottom: 16px;
      }
      .header {
        width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 64px;
      }
    `}</style>
  </Section>
)
