import Product from 'models/message';

var ProductsCollection = Backbone.Collection.extend({
  model: Product,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/messages",
  text: 'message'
});

export default ProductsCollection;
