import React, { Component, PropTypes } from 'react';
 
// ePubReader component - represents a single epubPreviewer item
export default class EpubPreviewer extends Component {
  render() {
    return (
      <li>{this.props.ebook.url}</li>
    );
  }
}
 
EpubPreviewer.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  ebook: PropTypes.object.isRequired,
};