import "./App.scss";
import React from "react";

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

var rdx = null;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      tabIndex: 0,      
      completed:[0],
      isLink:false,
    };
    rdx = this;
  }

  toggleTheme() {
    rdx.setState({
      theme: rdx.state.theme === "light" ? "dark" : "light",
    });
  }

  goToNext(i) {
    rdx.setState({ tabIndex: i + 1, isLink: false });
    let completed = rdx.state.completed;
    completed.push(i+1)
    rdx.setState({ tabIndex: i + 1, completed:completed });
  }

  goTo(id){
    rdx.setState({ tabIndex: id, isLink:true }); 
        let completed = rdx.state.completed;
    completed.push(id)
    rdx.setState({ completed:completed});
  }

  render() {
    let step;
    switch (rdx.state.tabIndex) {
      case 0:
        step = <Introduction onEnd={this.goToNext}></Introduction>;
        break;
      case 1:
        step = <Step1 isLink={rdx.state.isLink} onEnd={this.goToNext}></Step1>;
        break;
      case 2:
        step = <Step2 isLink={rdx.state.isLink} onEnd={this.goToNext}></Step2>;
        break;
      case 3:
        step = <Step3 isLink={rdx.state.isLink} onEnd={this.goToNext}></Step3>;
        break;
      case 4:
        step = <Step4 isLink={rdx.state.isLink} onEnd={this.goToNext}></Step4>;
        break;
      case 5:
        step = <Step5 isLink={rdx.state.isLink} onEnd={this.goToNext}></Step5>;
        break; 
        case 6:
        step = <Step6 isLink={rdx.state.isLink} onEnd={this.goToNext}></Step6>;
        break;
      case 7:
        step = <Step7 isLink={rdx.state.isLink} onEnd={this.goToNext}></Step7>;
        break;    
      default:
        step = "";
        break;
    }

    return (
      <div className={`App ${rdx.state.theme}`}>
        <Top checked={rdx.state.theme === "light"} onClick={rdx.toggleTheme} theme={rdx.state.theme}></Top>
        <Stepper current={rdx.state.tabIndex} goTo={rdx.goTo} completed={rdx.state.completed}/>
        <div className="typewriter-container">{step}</div>
      </div>
    );
  }
}



//
 //  _______ ____  _____   ____  
 // |__   __/ __ \|  __ \ / __ \ 
 //    | | | |  | | |  | | |  | |
 //    | | | |  | | |  | | |  | |
 //    | | | |__| | |__| | |__| |
 //    |_|  \____/|_____/ \____/ 
/*

- Convert long lists into injectable html snippets instead
- About me page
- Cookies/Mobile crap
*/

export default App;