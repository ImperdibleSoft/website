import React from "react";

class Messenger extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: "125008404402",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v2.12"
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  render() {
    return (
      <div
        className="fb-customerchat"
        page_id="464614936917687"
        theme_color="#378637"
      />
    );
  }
}

export default Messenger;
