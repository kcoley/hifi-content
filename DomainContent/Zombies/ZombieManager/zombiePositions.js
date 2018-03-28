//
// zombiePositions.js
// A library with functions that access the JSON containing zombie
// positions
// 
// Author: Elisa Lupin-Jimenez
// Copyright High Fidelity 2018
//
// Licensed under the Apache 2.0 License
// See accompanying license file or http://apache.org/
//
// All assets are under CC Attribution Non-Commerical
// http://creativecommons.org/licenses/
//
/* globals module */

module.exports = {
    positions: {
        Red: {
            1: {
                x: -9.685,
                y: -8.8159,
                z: 16.6786 
            },
            2: {
                x: -53.6797,
                y: -0.1246,
                z: -70.1916
            },
            3: {
                x: -23.3401,
                y: -9.2971,
                z: 7.9735
            },
            4: {
                x: -13.1930,
                y: -8.9837,
                z: -19.09211
            },
            5: {
                x: 23.7724,
                y: -8.3833,
                z: -13.1789
            },
            readable: {
                1: "Starting Bus",
                2: "Trees in the forest",
                3: "Second Bus",
                4: "Flipped over car",
                5: "Behind A&J"
            }
        }, 
        Purple: {
            1: {
                x: -31.4595,
                y: 3.3229,
                z: -63.5472
            }, 
            2: {
                x: -24.1829,
                y: -9.444,
                z: 5.0390
            },
            3: {
                x: -12.9658,
                y: -2.9995, 
                z: -45.7409
            },
            4: {
                x: -1.9797,
                y: -10.2699,
                z: 22.4347
            },
            readable: {
                1: "Forest",
                2: "Second Bus",
                3: "Inside Regalia",
                4: "Boardwalk"
            }
            

        },
        Pink: {
            1: {
                x:-22.87,
                y:-3.972,
                z:-31.82
            },
            2: { 
                x:-18.601,
                y:-9.198,
                z:25.885
            },
            3: { 
                x:-34.911,
                y:-2.9444,
                z:-33.705
            },
            4: {
                x: -1.9797,
                y: -10.2699,
                z: 22.4347
            },
            readable: {
                1: "Dumpster",
                2: "Boardwalk",
                3: "Near Regalia",
                4: "Boardwalk"
            }
        },
        Teal : {
            1: {
                x: 3.2379,
                y: -5.2083,
                z: -32.8581
            },
            2: {
                x: -25.1212,
                y: -9.2486,
                z: 2.6429
            },
            3: {
                x: -31.6578,
                y: 3.3258,
                z: -68.6602
            },
            4: {
                x: -1.9797,
                y: -10.2699,
                z: 22.4347
            },
            readable: {
                1: "A&J Cubby",
                2: "Near Gas Main",
                3: "Forest",
                4: "Boardwalk"
            }
        },
        Brick: {
            1: {
                x:8.9289,
                y:-8.42,
                z:-15.043
            },
            2: {
                x:-27.6005,
                y:-9.1983,
                z:5.1727
            },
            3: {
                x:-47.769,
                y:-0.025,
                z:-61.34
            },
            4: {
                x: -1.9797,
                y: -10.2699,
                z: 22.4347
            },
            readable : {
                1: "Back Alley",
                2: "Across from Gas Main",
                3: "Forest",
                4: "Boardwalk"
            }
        },
        Maroon: {
            1: {
                x:-21.4689,
                y:-9.1611,
                z:4.42181
            },
            2: {
                x:-19.5104,
                y:-9.16155,
                z:-8.32982
            },
            3: {
                x:34.951,
                y:-2.9243,
                z:-45.204
            },
            readable : {
                1: "Bus",
                2: "Back Alley",
                3: "Plateau"
            }
        },
        Boardwalk: {
            1: {
                x:-36.7870,
                y:-9.01325,
                z:18.25436
            }, 
            2: {
                x:-28.024,
                y:-9.3441,
                z:28.9311
            },
            3: {
                x: -1.9797,
                y: -10.2699,
                z: 22.4347
            },
            readable: {
                1: "Blocking cars",
                2: "Boardwalk path",
                3: "Final boardwalk"
            }
        },
        Generator: {
            1: {
                x:3.25877,
                y:-7.6755,
                z:-22.40
            },
            2: {
                x:2.4047,
                y:-6.2222,
                z:-27.292
            },
            3: {
                x:3.25877,
                y:-7.6755,
                z:-22.40
            },
            4: {
                x:1.0234,
                y:-9.2155,
                z:21.691
            },
            readable: {
                1: "Hill by A&J",
                2: "Near statue at A&J",
                3: "Hill by A&J",
                4: "Boardwalk"
            }
        },
        Plateau: {
            1: {
                x:26.7789,
                y:-3.0295,
                z:-23.85
            },
            2: {
                x:35.30,
                y:-2.96,
                z:-45.07
            },
            readable : {
                1: "Plateau Entry",
                2: "Top of Hill"
            }
        },
        CityWalk: {
            1: {
                x:-23.48978,
                y:-3.431381,
                z:-41.3309
            },
            2: {
                x:-10.348,
                y:-4.2053,
                z:-33.520
            },
            3: {
                x:1.0234,
                y:-9.2155,
                z:21.691
            },
            readable: {
                1: "Before Regalia",
                2: "Near Regalia Entrance",
                3: "Boardwalk"
            }
        }
    },

    getPosition: function(color, number, library) {
        if (color in library) {
            var colorJSON = library[color];
            if (number in colorJSON) {
                return colorJSON[number];
            }
            print("number not in specified color");
            return null;
        } else {
            print("Unable to locate position");
            return null;
        }
    }
};
