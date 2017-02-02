function convertImgToUseGit(src) {
  let base = "https://raw.githubusercontent.com/samjbmason/punkapi-images/master/images/v2/{img}?raw=true";
  let srcArray = src.split('/');
  return src.indexOf("raw=true") === -1
    ? base.replace(/\{img\}/ig, srcArray[srcArray.length - 1])
    : src;
}

let dummyArr = [
  {
    "id": 33,
    "name": "Sorachi Ace",
    "tagline": "Single Hop IPA Series - 2011.",
    "first_brewed": "01/2011",
    "description": "A hop that tastes of bubble gum? Seriously? No, we did not believe it either. But it does! This is one unique, son of a bitch of a hop. Lemony, deep, musty with a smoothness that belies its power. This hop is lemony like a lemon who was angry earlier but is now tired because of all the rage. This hop of Japanese origin is best enjoyed trying to make sushi from your gold fish, or trying to persuade your girlfriend (or boyfriend maybe) to dress up as a Geisha for Valentine’s Day.",
    "image_url": "https://images.punkapi.com/v2/33.png",
    "abv": 7.5,
    "ibu": 75,
    "target_fg": 1013,
    "target_og": 1068,
    "ebc": 30,
    "srm": 15,
    "ph": 4.4,
    "attenuation_level": 82.1,
    "volume": {
      "value": 20,
      "unit": "liters"
    },
    "boil_volume": {
      "value": 25,
      "unit": "liters"
    },
    "method": {
      "mash_temp": [
        {
          "temp": {
            "value": 65,
            "unit": "celsius"
          },
          "duration": null
        }
      ],
      "fermentation": {
        "temp": {
          "value": 19,
          "unit": "celsius"
        }
      },
      "twist": null
    },
    "ingredients": {
      "malt": [
        {
          "name": "Xpale",
          "amount": {
            "value": 6.38,
            "unit": "kilograms"
          }
        }, {
          "name": "Crystal 150",
          "amount": {
            "value": 0.13,
            "unit": "kilograms"
          }
        }, {
          "name": "Caramalt",
          "amount": {
            "value": 0.25,
            "unit": "kilograms"
          }
        }
      ],
      "hops": [
        {
          "name": "Sorachi Ace",
          "amount": {
            "value": 14.5,
            "unit": "grams"
          },
          "add": "start",
          "attribute": "bitter"
        }, {
          "name": "Sorachi Ace",
          "amount": {
            "value": 20,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }
      ],
      "yeast": "Wyeast 1056 - American Ale™"
    },
    "food_pairing": [
      "Sashimi", "Grilled salmon with a herb and citrus infused butter", "Basil, lemon and pine nut angel hair pasta with grilled chicken"
    ],
    "brewers_tips": "Sorachi Ace is hop best handled with care. Too much and your beer may taste like dill pickle and lemons.",
    "contributed_by": "Sam Mason <samjbmason>"
  }, {
    "id": 63,
    "name": "Sunk Punk",
    "tagline": "Ocean Fermented Lager.",
    "first_brewed": "09/2011",
    "description": "It's rumoured just a drop can calm the fiercest of storms. A balance of sweet, salt and savoury, citrus, spruce and caramel. Fermented at the bottom of the North Sea, which just so happens to be the perfect temperature for lagers to ferment.",
    "image_url": "https://images.punkapi.com/v2/63.png",
    "abv": 7.1,
    "ibu": 68,
    "target_fg": 1010,
    "target_og": 1056,
    "ebc": 14,
    "srm": 7,
    "ph": 4.4,
    "attenuation_level": 82.1,
    "volume": {
      "value": 20,
      "unit": "liters"
    },
    "boil_volume": {
      "value": 25,
      "unit": "liters"
    },
    "method": {
      "mash_temp": [
        {
          "temp": {
            "value": 65,
            "unit": "celsius"
          },
          "duration": 75
        }
      ],
      "fermentation": {
        "temp": {
          "value": 10,
          "unit": "celsius"
        }
      },
      "twist": "Seabuckthorn: 25g at end, Sea Salt: 20g at middle, Rum: 25ml at end"
    },
    "ingredients": {
      "malt": [
        {
          "name": "Extra Pale",
          "amount": {
            "value": 5.21,
            "unit": "kilograms"
          }
        }
      ],
      "hops": [
        {
          "name": "Chinook",
          "amount": {
            "value": 20,
            "unit": "grams"
          },
          "add": "start",
          "attribute": "bitter"
        }, {
          "name": "Ahtanum",
          "amount": {
            "value": 12.5,
            "unit": "grams"
          },
          "add": "start",
          "attribute": "bitter"
        }, {
          "name": "Chinook",
          "amount": {
            "value": 20,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        }, {
          "name": "Ahtanum",
          "amount": {
            "value": 12.5,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        }, {
          "name": "Chinook",
          "amount": {
            "value": 30,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }, {
          "name": "Ahtanum",
          "amount": {
            "value": 12.5,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }, {
          "name": "Simcoe",
          "amount": {
            "value": 12.5,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }, {
          "name": "Nelson Sauvin",
          "amount": {
            "value": 140,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }
      ],
      "yeast": "Wyeast 2007 - Pilsen Lager™"
    },
    "food_pairing": [
      "Salt baked cod with lemon and dill butter", "Beef, oyster and ale pie", "Apple and rosemary tart"
    ],
    "brewers_tips": "Keep the fermentation temperature as steady as possible to allow the lager yeast to do its thing.",
    "contributed_by": "Sam Mason <samjbmason>"
  }, {
    "id": 95,
    "name": "Peroxide Punk",
    "tagline": "Zesty Pale Ale.",
    "first_brewed": "04/2007",
    "description": "A trashy blonde concession for those who felt that our original 6% Punk IPA recipe was too hard hitting. This was also the first time we experimented with dry hopping our beers, giving Peroxide Punk a depth of flavour that belies its modest ABV. Zesty, aromatic and thirst quenching.",
    "image_url": "https://images.punkapi.com/v2/keg.png",
    "abv": 4,
    "ibu": 40,
    "target_fg": 1009,
    "target_og": 1039,
    "ebc": 18,
    "srm": 9,
    "ph": 4.4,
    "attenuation_level": 76.9,
    "volume": {
      "value": 20,
      "unit": "liters"
    },
    "boil_volume": {
      "value": 25,
      "unit": "liters"
    },
    "method": {
      "mash_temp": [
        {
          "temp": {
            "value": 65,
            "unit": "celsius"
          },
          "duration": 75
        }
      ],
      "fermentation": {
        "temp": {
          "value": 19,
          "unit": "celsius"
        }
      },
      "twist": null
    },
    "ingredients": {
      "malt": [
        {
          "name": "Maris Otter",
          "amount": {
            "value": 3.85,
            "unit": "kilograms"
          }
        }
      ],
      "hops": [
        {
          "name": "Amarillo",
          "amount": {
            "value": 25,
            "unit": "grams"
          },
          "add": "start",
          "attribute": "bitter"
        }, {
          "name": "Simcoe",
          "amount": {
            "value": 20,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }, {
          "name": "Amarillo",
          "amount": {
            "value": 25,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }, {
          "name": "Crystal",
          "amount": {
            "value": 20,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }, {
          "name": "Liberty",
          "amount": {
            "value": 20,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }, {
          "name": "Simcoe",
          "amount": {
            "value": 50,
            "unit": "grams"
          },
          "add": "dry hop",
          "attribute": "aroma"
        }, {
          "name": "Amarillo",
          "amount": {
            "value": 50,
            "unit": "grams"
          },
          "add": "dry hop",
          "attribute": "aroma"
        }
      ],
      "yeast": "Wyeast 1056 - American Ale™"
    },
    "food_pairing": [
      "Sashimi", "Pan roasted poussin with spring veg", "Lemon and thyme panna cotta"
    ],
    "brewers_tips": "During the mashing process, try to mix the malt without 'turning' or splashing too much. This will cause more oxygen to be dissolved in the mash - and result in a beer that will taste a little like a cardboard box.",
    "contributed_by": "Sam Mason <samjbmason>"
  }
];

export default {
  url : 'https://api.punkapi.com/v2/beers?per_page=80',
  params : {
    ABV_GREATER: 'abv_gt',
    ABV_LESS: 'abv_lt',
    NAME: 'beer_name',
    HOPS: 'hops',
    MALT: 'malt',
    YEAST: 'yeast'
  },
  fetch : url => {
    return {
      then: cb => {
        setTimeout(() => {
          cb([dummyArr.map(beer => {
              beer.image_url = convertImgToUseGit(beer.image_url);
              return beer;
            })[0]]);
        }, 500);
      }
    };
  }
}
