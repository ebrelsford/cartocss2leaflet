cartocss2leaflet
================

A node module for converting some CartoCSS map styles (markers, lines, and 
polygons) to Leaflet styles.

This is a simple wrapper around cartocss2json that converts the styles used in
CartoCSS to ones that are compatible with the simple SVG styles used in Leaflet.


Why?
----

The idea is to ease the transition from CartoCSS-dependent maps to plain Leaflet
maps. This probably won't get you the whole way there (see WON'T DO, below), but
it's a start.


Usage
-----

You can use it as a module or as a command line script. To do the latter, clone
this repo, `npm install -g` and invoke the script:

    cartocss2leaflet < <file>


TODO
----

 * Any SVG properties not already covered


WON'T DO
--------

The plan is to support only those CartoCSS properties that map onto the
Leaflet's SVG path properties. As such, there is no plan to support the 
following properties:

 * `background-*`
 * `building-*`
 * `comp-op`
 * `point-*`
 * `raster-*`
 * `shield-*`
 * `text-*`


Contributing
------------

All code changes should be made in `src/index.js` and compiled using Babel into
the resulting `index.js`. Run `npm run watch` while editing to continuously
compile using Babel.


License
-------

MIT.
