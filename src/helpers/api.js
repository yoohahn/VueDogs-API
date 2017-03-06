export default {
  url: `api/v2/beers?_c=${+new Date()}`,
  params: {
    ABV_GREATER: 'abv_gt',
    ABV_LESS: 'abv_lt',
    NAME: 'beer_name',
    HOPS: 'hops',
    MALT: 'malt',
    YEAST: 'yeast',
    IDS: 'ids'
  },
  fetch: url => {
    return fetch( url.replace(/\s/gi, "_").replace(/,/gi, "|") )
      .then( result => {
        return result.json();
      } );
  }
}
