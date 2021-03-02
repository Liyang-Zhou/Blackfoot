import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ states, setStates, items }) => (
  <div className="collection-preview">
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} id={id} states={states} setStates={setStates} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
