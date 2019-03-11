import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleType = this.handleType.bind(this);
  }

  parse() {
    let output = this.state.input;
    output = output.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, "<b>$1</b>");
    output = output.replace(/[\#]{1}(.+)/g, "<h1>$1</h1>");
    output = output.replace(
      /[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g,
      '<a href="$2" title="$4">$1</a>'
    );
    output = output.replace(/\\n/g, "<br/>");
    return output;
  }

  handleType(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
      <h1> Markdown 解析サイト</h1>
      <div>
        <div className="container">
          <textarea placeholder="Input Text" onChange={this.handleType} />
          <div className="content">{this.parse()}</div>
          <div className="content">
            <Parse input={this.state.input} />
          </div>
        </div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;

function Parse(props) {
  let output = props.input;
  output = output.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, "<b>$1</b>");
  output = output.replace(/[\#]{1}(.+)/g, "<h1>$1</h1>");
  output = output.replace(
    /[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g,
    '<a href="$2" title="$4">$1</a>'
  );
  output = output.replace(/\\n/g, "<br/>");
  return <div>{<div dangerouslySetInnerHTML={{ __html: output }} />}</div>;
}

const Footer = () => {
  return (
    <div className="footer">
      <p>Other Projects</p>
      <div className="button">
        <a href="http://sujank.me/reactmovie">
          <button>映画検索</button>
        </a>
        <a href="http://sujank.me/reactgame/">
          <button>三目並べ</button>
        </a>
      </div>
    </div>
  );
};
