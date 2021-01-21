import "./App.scss";
import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

import Top from "./components/Top";
import Stepper from "./components/Stepper";
import Introduction from "./components/Introduction";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";

//vars
var rdx = null;
const steps = [Introduction, Step1, Step2, Step3, Step4, Step5, Step6, Step7];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      tabIndex: 0,
      completed: [0],
      isLink: false,
    };
    rdx = this;
  }

  componentDidMount() {
    rdx.setProgress();
  }

  setProgress() {
    let progress = Cookies.get("benfauschdevProgress");

    if (typeof progress !== "undefined") {
      progress = JSON.parse(progress).map(function (x) {
        return parseInt(x, 10);
      });
      rdx.setState({ completed: progress });
    }
  }

  toggleTheme() {
    rdx.setState({
      theme: rdx.state.theme === "light" ? "dark" : "light",
    });
  }

  goToNext(i) {
    rdx.setState({ tabIndex: i + 1, isLink: false });
    rdx.pushCompleted(i + 1);
  }

  goTo(id) {
    rdx.setState({ tabIndex: id, isLink: true });
    rdx.pushCompleted(id);
  }

  pushCompleted(id) {
    let completed = rdx.state.completed;
    completed.push(parseInt(id));
    rdx.setState({ completed: completed });

    let accepted = Cookies.get("benfauschdevAccept");
    if (accepted) {
      Cookies.remove("benfauschdevProgress");
      Cookies.set("benfauschdevProgress", completed);
    }
  }

  render() {
    let step;
    let CurrentStep = steps[rdx.state.tabIndex];
    step = <CurrentStep isLink={rdx.state.isLink} onEnd={this.goToNext} />;

    return (
      <div className={`App ${rdx.state.theme}`}>
        <Top
          checked={rdx.state.theme === "light"}
          onClick={rdx.toggleTheme}
          theme={rdx.state.theme}
        ></Top>
        <Stepper
          current={rdx.state.tabIndex}
          goTo={rdx.goTo}
          completed={rdx.state.completed}
        />
        <div className="typewriter-container">{step}</div>
        <CookieConsent
          location="bottom"
          buttonText="Nom Nom Nom"
          cookieName="benfauschdevAccept"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This site uses cookies to remember your progress.{" "}
          <span style={{ fontSize: "10px" }}>No pressure :)</span>
        </CookieConsent>
        <span class="git">
          <a href="https://github.com/benfausch">
            <img src="/img/git.png" alt="benfauschdev github" />
          </a>
        </span>
      </div>
    );
  }
}

export default App;