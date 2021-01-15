/* eslint-disable */
export const snippet1 = `
 __   __  _______  __    _      ___  _______ 
|  | |  ||   _   ||  |  | |    |   ||       |
|  |_|  ||  |_|  ||   |_| |    |   ||  _____|
|       ||       ||       |    |   || |_____ 
|       ||       ||  _    | ___|   ||_____  |
 |     | |   _   || | |   ||       | _____| |
  |___|  |__| |__||_|  |__||_______||_______|

var video = document.querySelector("#videoElement"),
    canvas,
    isColored = false,
    currentId = 0
asciiWidth = 100,
    asciiHeight = 30,
    refreshRate = 30,
    rate = 1,
    capturing = false,
    recording = false,
    exporting = false,
    outputFrames = [];
outputVideo = [],
    frameMax = 40,
    capturedDesc = document.getElementById("ascii-captured"),
    loader = document.querySelector(".loader"),
    cdiv = document.getElementById("tmp");
window.onload = (event) => {
    //reset controls
    document.querySelector('#controls').reset()
    document.querySelector('#slideWidth').MaterialSlider.change(asciiWidth)
    document.querySelector('#slideHeight').MaterialSlider.change(asciiHeight)
    document.querySelector('#refreshRate').MaterialSlider.change(refreshRate)
    document.querySelector('#switchColorLabel').MaterialSwitch.off();
}

function isMobile() {
    let check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};


function checkView() {
    if (isMobile() || window.innerWidth < 768) {
        document.querySelector('body').style.display = 'none';
        window.alert('Hi there, this project is very resource heavy. Please do not attempt to use this site on your phone, it may catch fire!! Use at your own risk :)');
    } else {
        document.querySelector('body').style.display = 'block';
    }
}


//camera check and init
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(function(stream) {
        video.srcObject = stream;
        init()
    }).catch(function(err0r) {
        alert("Hola muchacho! This site needs your camera to work, otherwise it's just a really fancy empty page :)");
    });
}

//start frame watcher
function init() {
    currentId = window.setInterval(function() {
        checkView()
        takeSnapshot()
    }, refreshRate)
    console.log('currentId', currentId)
}

//reset watcher
function clear() {
    console.log('clearing currentId', currentId)
    window.clearInterval(currentId);
}

//capture frame
function takeSnapshot() {
    var t0 = performance.now();
    // var img = document.querySelector('img') || document.createElement('img');
    var context;
    var width = video.offsetWidth,
        height = video.offsetHeight;
    canvas = canvas || document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
    if (!exporting) {
        //direct output
        canvas.toBlob(function(blob) {
            var reader = new FileReader();
            // CONVERT
            reader.onload = function() {
                var arrayBuffer = this.result,
                    array = new Uint8Array(arrayBuffer);

                //wait for availability
                if (typeof convert !== 'undefined') {
                    var txt = convert(array, JSON.stringify({
                        fixedWidth: parseInt(asciiWidth),
                        colored: isColored,
                        fixedHeight: parseInt(asciiHeight),
                        reversed: false,
                    }));
                    var ansi_up = new AnsiUp();
                    var html = ansi_up.ansi_to_html(txt);
                    if (!recording) {
                        //set to html
                        var cdiv = document.getElementById("console");
                        cdiv.innerHTML = html;
                    }
                    //analyze
                    var t1 = performance.now();
                    rate = t1 - t0;
                    document.getElementById("performance").innerHTML = rate;
                    document.querySelector('.mdl-js-progress').MaterialProgress.setProgress(rate / 40);
                    //convert screencap for export
                    if (capturing) {
                        capturing = false;
                        html2canvas(cdiv).then(function(canvasOutput) {
                            console.log('canvasOutput', canvasOutput)
                            var downloadImg = document.getElementById('ascii-img');
                            downloadImg.setAttribute('download', \`cool-ascii-stream-\${Date.now()}.png\`);
                            downloadImg.setAttribute('href', canvasOutput.toDataURL("image/png").replace("image/png", "image/octet-stream"));
                            downloadImg.click();
                        });
                    }
                    if (recording) {
                        outputFrames.push(html)
                        if (outputFrames.length === frameMax) {
                            document.getElementById('recordBtn').classList.remove('active')
                            console.log('MAX FRAMES REACHED', outputFrames.length)
                            document.querySelector('#ascii-recorded').innerHTML = '';
                            convertToGif(outputFrames)
                        } else if (outputFrames.length < frameMax) {
                            document.querySelector('#ascii-recorded').innerHTML = outputFrames.length + '/' + frameMax + ' recorded';
                        }
                    }
                } //end undefined if
            };
            reader.readAsArrayBuffer(blob);
            //END CONVERT
        }, 'image/jpeg')
    } else {
        document.getElementById("performance").innerHTML = rate;
        document.querySelector('.mdl-js-progress').MaterialProgress.setProgress(rate / 40);
        rate = 0;
    }
}
async function convertToGif(frames) {
    // var cdiv = document.getElementById("tmp");
    var consoleDiv = document.getElementById("console")
    cdiv.style.width = consoleDiv.innerWidth;
    cdiv.style.height = consoleDiv.innerHeight;
    console.log("NUMBER OF TOTAL FRAMES", frames.length)
    // frames.forEach(function(frame) {
    for (let i = 0; i < frames.length; i++) {
        cdiv.innerHTML = frames[i];
        if (recording && i < frameMax) {
            await frame2Canvas(i);
        } else if (i === frameMax) {
            exporting = true;
            console.log('SHOULD CREATE GIF NOW', outputVideo.length, frameMax)
            loader.classList.add('active')
            capturedDesc.innerHTML = 'Creating jif... if you selected color or a high resolution, it\'ll be a minute';
            createGifAsset()
        }
    }
}

function frame2Canvas(index) {
    return new Promise(resolve => {
        html2canvas(cdiv).then(function(canvasOutput) {
            console.log('recorded output', canvasOutput)
            let img = canvasOutput.toDataURL("image/png")
            outputVideo.push(img)
            console.log('frames captured', outputVideo.length, 'INDEX', index)
            loader.classList.add('active')
            capturedDesc.innerHTML = 'Capturing frames, ' + outputVideo.length + '/' + frameMax;
            resolve(true)
        });
    })
}

function createGifAsset() {
    gifshot.createGIF({
        'images': outputVideo,
        // 'interval': refreshRate / 3600,
        'interval':.00833,
        'gifWidth': 1000,
        'gifHeight': 625,
    }, function(obj) {
        if (!obj.error) {
            var image = obj.image;
            console.log("gif created", image)
            var downloadImg = document.getElementById('ascii-img');
            downloadImg.setAttribute('download', \`cool-ascii-stream-${Date.now()}.gif\`);
            downloadImg.setAttribute('href', image.replace("image/gif", "image/octet-stream"));
            downloadImg.click();
            console.log("CLEARING QUEUE")
            outputFrames = [];
            outputVideo = [];
            recording = false;
            loader.classList.remove('active')
            capturedDesc.innerHTML = '';
            exporting = false;
        } else {
            console.log('error', obj.error)
            recording = false;
        }
    });
    return false;
}
/*88888888888888888888888888
*
*
//DOCUMENT LISTENERS
*
*
888888888888888888888888888888*/
//color switch
document.querySelector("#switchColor").addEventListener("change", function(e) {
    console.log('switch', this.checked)
    clear()
    isColored = this.checked;
    init()
})
//width
document.querySelector("#slideWidth").addEventListener("change", function(event) {
    event.preventDefault()
    console.log('slide', this.value)
    document.getElementById("slideWidthVal").innerHTML = this.value;
    clear()
    asciiWidth = parseInt(this.value);
    init()
})
//height
document.querySelector("#slideHeight").addEventListener("change", function(event) {
    event.preventDefault()
    console.log('slide', this.value)
    document.getElementById("slideHeightVal").innerHTML = this.value;
    clear()
    asciiHeight = parseInt(this.value);
    init()
})
//refresh Rate
document.querySelector("#refreshRate").addEventListener("change", function(event) {
    event.preventDefault()
    console.log('slide', this.value)
    document.getElementById("refreshRateVal").innerHTML = this.value;
    clear()
    refreshRate = parseInt(this.value);
    init()
})
//text color
document.querySelector("#textColor").addEventListener("change", function(event) {
    event.preventDefault()
    console.log('color', this.value)
    document.getElementById("textColorVal").innerHTML = this.value;
    document.getElementById("textColorVal").style.color = this.value;
    document.getElementById("console").style.color = this.value;
})
//capture logic
document.querySelector("#ascii-capture").addEventListener("click", function(event) {
    capturing = true;
    console.log('capturing...')
})
//record logic
document.querySelector("#ascii-record").addEventListener("click", function(event) {
    recording = true;
    console.log('recording...')
    document.getElementById('recordBtn').classList.add('active')
});


///INIT
const go = new Go();
WebAssembly.instantiateStreaming(fetch("js/main.wasm"), go.importObject).then((result) => {
    go.run(result.instance);
});`


export const snippet2 = `
 ______    _______  _______  _______  _______ 
|    _ |  |       ||   _   ||       ||       |
|   | ||  |    ___||  |_|  ||       ||_     _|
|   |_||_ |   |___ |       ||       |  |   |  
|    __  ||    ___||       ||      _|  |   |  
|   |  | ||   |___ |   _   ||     |_   |   |  
|___|  |_||_______||__| |__||_______|  |___|  


import React, { Component } from "react";

//Custom Components
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import CaptureButton from "./components/CaptureButton";
import RecordButton from "./components/RecordButton";
import Performance from "./components/Performance";
import Console from "./components/Console";
import { MobileCheck } from "./components/MobileCheck";

//External Libraries/Components
import html2canvas from "html2canvas";
import { ToastContainer, toast } from "react-toastify";

//Styles
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

//Init vars
var AU = require("ansi_up");
//eslint-disable-next-line
var ansi_up = new AU.default();
var rdx = null;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      invalidBrowser: false,
      video: null,
      canvas: null,
      currentId: 0,
      rate: 1,
      capturing: false,
      recording: false,
      exporting: false,
      outputFrames: [],
      outputVideo: [],
      frameMax: 40,
      consoleHTML: null,
      recordedProg: "",
      daDown: null,
      daHref: null,
      capturedDesc: "",
      loading: false,
      recordingVideo: false,
      controls: {
        isColor: false,
        asciiWidth: 100,
        asciiHeight: 30,
        refreshRate: 30,
        consoleColor: "#ffffff",
      },
    };

    //class scope this
    rdx = this;

    //refs
    this.downloadImg = React.createRef();
    this.console = React.createRef();
    this.performanceMetrics = React.createRef();
    this.videoElement = React.createRef();
    this.tmp = React.createRef();
  }


  /*Main Loop*/
  // Takes Video Snap, converts to ASCII
  // Outputs for Capture/Recording

  takeSnapshot() {
    let t0 = performance.now(),
      context,
      width = rdx.state.video.offsetWidth,
      height = rdx.state.video.offsetHeight;

    //set widths
    rdx.state.canvas = rdx.state.canvas || document.createElement("canvas");
    rdx.state.canvas.width = width;
    rdx.state.canvas.height = height;

    //create img from video
    context = rdx.state.canvas.getContext("2d");
    context.drawImage(rdx.state.video, 0, 0, width, height);

    //create ascii
    if (!rdx.state.exporting) {
      rdx.state.canvas.toBlob(function (blob) {
        let reader = new FileReader();

        // convert to uint8array
        reader.onload = function () {
          let arrayBuffer = this.result,
            array = new Uint8Array(arrayBuffer);

          //wait for reader availability
          if (typeof convert !== "undefined") {
            //eslint-disable-next-line
            let txt = convert(
              array,
              JSON.stringify({
                fixedWidth: parseInt(rdx.state.controls.asciiWidth),
                colored: rdx.state.controls.isColor,
                fixedHeight: parseInt(rdx.state.controls.asciiHeight),
                reversed: false,
              })
            );

            //eslint-disable-next-line
            // let ansi_up = new AnsiUp();

            //convert HTML to ASCII
            let html = ansi_up.ansi_to_html(txt);
            if (!rdx.state.recording) {
              //set to console
              rdx.setState({ consoleHTML: html });
            }

            //analyze
            let t1 = performance.now();
            rdx.setState({ rate: parseInt(t1 - t0) });
            rdx.setProgress();

            //convert screencap for export
            if (rdx.state.capturing) {
              rdx.captureFrame();
            }

            //convert to gif for export
            if (rdx.state.recording) {
              rdx.recordFrames(html);
            }
          }
        };

        try {
          reader.readAsArrayBuffer(blob);
        } catch (e) {
          console.log("no blob yet");
        }
        //END CONVERT
      }, "image/jpeg");
    } else {
      rdx.setProgress();
      rdx.state.rate = 0;
    }
  }

  //Set performance bar
  setProgress() {
    try {
      rdx.performanceMetrics.current.MaterialProgress.setProgress(
        rdx.state.rate / 40
      );
    } catch (e) {
      console.log("no MD yet");
    }
  }

  //Captures 1 Frame From ASCII Output, Downloads Gif
  captureFrame() {
    rdx.setState({ capturing: false });

    //eslint-disable-next-line
    html2canvas(rdx.console.current).then(function (canvasOutput) {
      rdx.setState({
        daDown: \`cool-ascii-stream-\${Date.now()}.png\`,
        daHref: canvasOutput
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream"),
      });

      rdx.downloadImg.current.click();
    });
  }

  //Captures Frames from ASCII Output, Converts to Gif When Max Reached
  recordFrames(html) {
    rdx.state.outputFrames.push(html);
    if (rdx.state.outputFrames.length === rdx.state.frameMax) {
      rdx.setState({ recordedProg: "", recordingVideo: false });

      //convert to gif
      rdx.convertToGif(rdx.state.outputFrames);
    } else if (rdx.state.outputFrames.length < rdx.state.frameMax) {
      rdx.setState({
        recordedProg: \`\${rdx.state.outputFrames.length} / \${rdx.state.frameMax} recorded\`,
      });
    }
  }

  //Converts Video Frames to Gif, Outputs Gif When Complete
  async convertToGif(frames) {
    //set capture frame to match video frame height
    rdx.tmp.current.style.width = rdx.console.current.innerWidth;
    rdx.tmp.current.style.height = rdx.console.current.innerHeight;

    for (let i = 0; i < frames.length; i++) {
      rdx.setState({ tmpHTML: frames[i] });

      if (rdx.state.recording && i < rdx.state.frameMax) {
        await rdx.frame2Canvas(i);
      } else if (i === rdx.state.frameMax) {
        rdx.setState({
          recording: false,
          exporting: true,
          loading: true,
          capturedDesc:
            "Creating jif... if you selected color or a high resolution, it'll be a minute",
        });

        rdx.createGifAsset();
      }
    }
  }

  //Converts Tmp HTML to Canvas Object
  frame2Canvas(index) {
    return new Promise((resolve) => {
      //eslint-disable-next-line
      html2canvas(rdx.tmp.current).then(function (canvasOutput) {
        let img = canvasOutput.toDataURL("image/png");

        let curOpt = rdx.state.outputVideo;
        curOpt.push(img);

        rdx.setState({
          outputVideo: curOpt,
          loading: true,
          capturedDesc:
            "Capturing frames, " +
            rdx.state.outputVideo.length +
            "/" +
            rdx.state.frameMax,
        });
        resolve(true);
      });
    });
  }

  //Creates GIF from Output Video Frames
  createGifAsset() {
    //eslint-disable-next-line
    gifshot.createGIF(
      {
        images: rdx.state.outputVideo,
        // 'interval': refreshRate / 3600,
        interval: 0.00833,
        gifWidth: 1000,
        gifHeight: 625,
      },
      function (obj) {
        if (!obj.error) {
          var image = obj.image;
          rdx.setState({
            daDown: \`cool-ascii-stream-\${Date.now()}.gif\`,
            daHref: image.replace("image/gif", "image/octet-stream"),
          });

          rdx.downloadImg.current.click();

          rdx.setState({
            outputFrames: [],
            outputVideo: [],
            loading: false,
            capturedDesc: "",
            exporting: false,
          });
        } else {
          console.log("error", obj.error);
          rdx.state.recording = false;
        }
      }
    );
    return false;
  }


  //Controls Listener/Handler
  updateView(event, name) {
    console.log("UPDATE", name, event.target.value);
    switch (name) {
      case "color-switch":
        rdx.setState((prevState) => ({
          controls: { ...prevState.controls, isColor: event.target.checked },
        }));
        break;
      case "ascii-width":
        rdx.setState((prevState) => ({
          controls: { ...prevState.controls, asciiWidth: event.target.value },
        }));
        break;
      case "ascii-height":
        rdx.setState((prevState) => ({
          controls: { ...prevState.controls, asciiHeight: event.target.value },
        }));
        break;
      case "refresh-rate":
        rdx.setRefresh(event);
        break;
      case "console-color":
        rdx.setState((prevState) => ({
          controls: { ...prevState.controls, consoleColor: event.target.value },
        }));
        break;
      default:
        return true;
    }
  }

  //Clears Interval, Restarts watcher with new rate
  setRefresh(e) {
    rdx.clear();
    rdx.setState((prevState) => ({
      controls: { ...prevState.controls, refreshRate: e.target.value },
    }));
    rdx.init(e.target.value);
  }

  //////////////////////////
  //  _       _ _
  // (_)     (_) |
  //  _ _ __  _| |_
  // | | '_ \| | __|
  // | | | | | | |_
  // |_|_| |_|_|\__|
  //////////////////////////

  //Begins Frame Watcher
  init(val) {
    rdx.state.currentId = window.setInterval(
      function () {
        rdx.checkView();
        rdx.takeSnapshot();
      },
      val ? val : rdx.state.controls.refreshRate
    );
  }

  //Resets Frame Watcher
  clear() {
    window.clearInterval(rdx.state.currentId);
  }

  //Verifies Desktop
  checkView() {
    if (MobileCheck() || window.innerWidth < 1024) {
      if (!rdx.state.invalidBrowser) {
        rdx.setState({ invalidBrowser: true });

        toast.dark(
          "Hi there, this project is too resource heavy for mobile browsers, live canvas drawing is like that right now unfortunately. Please do not attempt to use this site on your mobile device, it may catch fire!!",
          {
            position: "top-center",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    } else {
      //reload page once valid
      if(rdx.state.invalidBrowser){
        window.location.reload()
      }
    }
  }



  componentDidMount() {
    window.addEventListener("resize", rdx.checkView());
    //Verifies Camera Permissions
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then(function (stream) {
          rdx.setState({ invalidBrowser: false });
          rdx.state.video = rdx.videoElement.current;
          rdx.state.video.srcObject = stream;
          rdx.init();
        })
        .catch(function (error) {
          console.log("error", error);

          if (!rdx.state.invalidBrowser) {
            rdx.setState({ invalidBrowser: true });

            toast.dark(
              "Hola muchacho! This site needs your camera to work, otherwise it's just a really fancy empty page :) You'll want to refresh the page and allow camera permissions for this page.",
              {
                position: "top-center",
                autoClose: 9000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }
        });
    }

    //eslint-disable-next-line
    const go = new Go();

    //Creates New WASM Instance
    WebAssembly.instantiateStreaming(
      fetch("js/main.wasm"),
      go.importObject
    ).then((result) => {
      console.log("running wasm");
      go.run(result.instance);
    });
  }

  render() {
    return (
      <div className="App">
        {rdx.state.invalidBrowser ? (
          <div className="invalidBrowser" id="errorMsg">
            <ToastContainer
              position="top-center"
              autoClose={9000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover              
            />
          </div>
        ) : (
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
            <Header></Header>
            <div className="mdl-layout__drawer">
              <span className="mdl-layout-title">Settings</span>
              <Nav
                controlVals={rdx.state.controls}
                onUpdate={rdx.updateView}
              ></Nav>
            </div>
            <main className="mdl-layout__content">
              <div className="page-content">
                <div className="video-card mdl-card mdl-shadow--2dp">
                  <div className="mdl-card__actions">
                    <span className="video-card-image__filename">You</span>
                  </div>
                  <video
                    autoPlay={true}
                    id="videoElement"
                    ref={rdx.videoElement}
                    height="175"
                  ></video>
                  <span
                    id="recordBtn"
                    className={rdx.state.recordingVideo ? "active" : " "}
                  >
                    {" "}
                    Recording...<i></i>
                  </span>
                  <p id="ascii-recorded">{rdx.state.recordedProg}</p>
                  <div className="mdl-card__actions">
                    <h4>Capture</h4>
                    <RecordButton
                      setRecording={() =>
                        rdx.setState({ recording: true, recordingVideo: true })
                      }
                    />
                    <div
                      className="mdl-tooltip mdl-tooltip--top"
                      htmlFor="ascii-record"
                    >
                      Record up to 40 frames of the live video feed. <br />
                      <br />
                      Once finished this will export as a gif file for your
                      enjoyment! <br />
                      <br />
                      Length of the gif will depend on the refresh rate in the
                      toolbar.
                    </div>
                    <CaptureButton
                      setCapturing={() => rdx.setState({ capturing: true })}
                    />
                    <div
                      className="mdl-tooltip mdl-tooltip--bottom"
                      htmlFor="ascii-capture"
                    >
                      Take a capture of the live video feed. <br />
                      <br />
                      Once finished this will export as a png file for your
                      enjoyment.
                    </div>
                    <div
                      className={\`loader \${rdx.state.loading ? "active" : ""}\`}
                    >
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <p id="ascii-captured" ref={rdx.captured}>
                      {rdx.state.capturedDesc}
                    </p>

                    <a
                      id="ascii-img"
                      href={rdx.state.daHref}
                      download={rdx.state.daDown}
                      ref={rdx.downloadImg}
                    >
                      &nbsp;
                    </a>
                  </div>
                  <Performance
                    performanceMetrics={rdx.performanceMetrics}
                    rate={rdx.state.rate}
                  />
                </div>
                <div className="mdl-layout-spacer"></div>
                <Console
                  console={rdx.console}
                  tmp={rdx.tmp}
                  consoleHTML={rdx.state.consoleHTML}
                  tmpHTML={rdx.state.tmpHTML}
                  consoleColor={rdx.state.controls.consoleColor}
                />
              </div>
            </main>
          </div>
        )}
      </div>
    );
  } //end render
}

export default App;`;