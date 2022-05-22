import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import md from './md/p1.md';
import 'github-markdown-css'
 
export default class P1renderer extends React.PureComponent {
  state = {
    markdown: ''
  }
 
  componentWillMount() {
    fetch(md)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }
 
  render() {
    const { markdown } = this.state;
 
    return (
      <ReactMarkdown 
      children={markdown}
      className='markdown-body' 
      remarkPlugins={[gfm]} 
       />
    );
  }
}
 
