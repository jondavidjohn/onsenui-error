require("onsenui/js/onsenui");

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'

class List extends Component {
  constructor() {
    super();
    this.listSelect = this.listSelect.bind(this);
  }

  listSelect() {
    this.refs.navigation.pushPage("nextPage", { animation: 'slide' });
  }

  render() {
    return (
      <div>
        <ons-navigator ref="navigation">
          <ons-page>
            <ons-toolbar>
              <div className="center">Nav</div>
            </ons-toolbar>

            <ons-list key="list">
              <ons-list-item modifier="chevron" onClick={this.listSelect}>
                Slide Animation
              </ons-list-item>
            </ons-list>
          </ons-page>
        </ons-navigator>

        <ons-template id="nextPage">
          <ons-page>
            <div className="left">
              <ons-back-button>Back</ons-back-button>
            </div>
            <div className="center">Next Page</div>
          </ons-page>
        </ons-template>
      </div>
    );
  }
}

render(<List/>, document.getElementById("main"));
