import $ from "jquery";
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import Navigation from "./components/navigation";

injectTapEventPlugin();

$(function onLoad() {
  function render() {
    if ($("#app").length > 0) {
      React.render(
        <div>
          <h1>App</h1>
          <Navigation/>
        </div>, document.getElementById("app")
      );
    }
  }

  render();
});
