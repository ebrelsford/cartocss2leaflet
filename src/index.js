import _ from 'underscore';
import { cartocss2json } from 'cartocss2json';
import rgbHex from 'rgb-hex';

export function cartocss2leaflet(cartocss) {
    var asJson = cartocss2json(cartocss);

    _.keys(asJson).forEach((layerName) => {
        asJson[layerName].forEach((ruleSet) => {
            _.keys(ruleSet.style).forEach((styleName) => {
                var value = ruleSet.style[styleName];
                delete ruleSet.style[styleName];
                _.extend(ruleSet.style, property(styleName, value));
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
                color: '#' + rgbHex(...value.rgb),
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
                color: '#' + rgbHex(...value.rgb),
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
                fillColor: '#' + rgbHex(...value.rgb),
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
                fillColor: '#' + rgbHex(...value.rgb),
                fillOpacity: value.alpha
            };
        case 'polygon-opacity':
            return {
                fillOpacity: value
            };
        default:
            console.warn(`Unknown property "${name}"`);
    }
}
