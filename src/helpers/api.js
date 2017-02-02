function convertImgToUseGit( src ) {
  let base = "https://raw.githubusercontent.com/samjbmason/punkapi-images/master/images/v2/{img}?raw=true";
  let srcArray = src.split( '/' );
  return src.indexOf( "raw=true" ) === -1 ?
    base.replace( /\{img\}/ig, srcArray[ srcArray.length - 1 ] ) :
    src;
}

export default {
  url: 'https://api.punkapi.com/v2/beers?per_page=80',
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
      } )
      .then( beers => {
        return beers.map( beer => {
          beer.image_url = convertImgToUseGit( beer.image_url );
          return beer;
        } );
      } );
  }
}
