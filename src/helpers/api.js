export default {
  url: 'api/v2/beers?1=1',
  params: {
    ABV_GREATER: 'abv_gt',
    ABV_LESS: 'abv_lt',
    NAME: 'beer_name',
    HOPS: 'hops',
    MALT: 'malt',
    YEAST: 'yeast'
  },
  fetch: url => {
    return fetch( url )
      .then( result => {
        return result.json();
      } );
  }
}
