import React from 'react'
// eslint-disable-next-line no-unused-vars
import CollectionItem from '../../components/collection-item/collection-item.component'
import { connect } from 'react-redux'
import { selectCollection } from "../../redux/shop/shop.selectors";
import './collection.styles.scss'

const CollectionPage = ({ match, collection }) => {
    console.log(collection);
    const {items} = collection;
     return (
         <div className="collection-page">
             <h2 className="title">{collection.title}</h2>
             <div className="items">
                 {
                     items.map(item => <CollectionItem key={item.id} item={item}/>)
                 }
             </div>
         </div>
     );
 };

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
