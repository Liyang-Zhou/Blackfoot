import React from 'react';

import COLLECTION_DATA from './collection.data.js';

import './collectionpage.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class CollectionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: COLLECTION_DATA,
    };
  }

  // componentWillUpdate() {
  //   this.props.setStates({ ...this.props.states, clicked: false})
  // }

  render() {
    const { collections } = this.state;
    return (
      <div className="collection-page">
      <p className="title"> Click on image! Try other projects.</p>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} states={this.props.states} setStates={this.props.setStates} {...otherCollectionProps} />
        ))}
        
      </div>
    );
  }
}

export default CollectionPage;
