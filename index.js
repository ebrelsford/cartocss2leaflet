'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.cartocss2leaflet = cartocss2leaflet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _cartocss2json = require('cartocss2json');

var _rgbHex = require('rgb-hex');

var _rgbHex2 = _interopRequireDefault(_rgbHex);

function cartocss2leaflet(cartocss) {
    var asJson = (0, _cartocss2json.cartocss2json)(cartocss);

    _underscore2['default'].keys(asJson).forEach(function (layerName) {
        asJson[layerName].forEach(function (ruleSet) {
            _underscore2['default'].keys(ruleSet.style).forEach(function (styleName) {
                var value = ruleSet.style[styleName];
                delete ruleSet.style[styleName];
                _underscore2['default'].extend(ruleSet.style, property(styleName, value));
            });
        });
    });
    return asJson;
}

function property(name, value) {
    switch (name) {
        case 'line-cap':
            return {
                lineCap: value
            };
        case 'line-color':
            return {
                color: '#' + _rgbHex2['default'].apply(undefined, _toConsumableArray(value.rgb)),
                opacity: value.alpha
            };
        case 'line-dasharray':
            return {
                dashArray: value.join(' ')
            };
        case 'line-opacity':
            return {
                opacity: value
            };
        case 'line-join':
            return {
                lineJoin: value
            };
        case 'line-width':
            return {
                weight: value
            };
        case 'marker-line-color':
            return {
                color: '#' + _rgbHex2['default'].apply(undefined, _toConsumableArray(value.rgb)),
                opacity: value.alpha,
                stroke: true
            };
        case 'marker-line-opacity':
            return {
                opacity: value
            };
        case 'marker-line-width':
            return {
                weight: value
            };
        case 'marker-fill':
            return {
                fill: true,
                fillColor: '#' + _rgbHex2['default'].apply(undefined, _toConsumableArray(value.rgb)),
                fillOpacity: value.alpha
            };
        case 'marker-fill-opacity':
            return {
                fillOpacity: value
            };
        case 'marker-width':
            return {
                radius: value
            };
        case 'polygon-fill':
            return {
                fill: true,
                fillColor: '#' + _rgbHex2['default'].apply(undefined, _toConsumableArray(value.rgb)),
                fillOpacity: value.alpha
            };
        case 'polygon-opacity':
            return {
                fillOpacity: value
            };
        default:
            console.warn('Unknown property "' + name + '"');
    }
}
