/**
 * devuelvo un objeto con xBrand y folder segun request
 */
module.exports = ({ headers }) => {
    var xBrand = headers['x-brand'] ? headers['x-brand'].toLowerCase() : 'garbarino';
    var folder = (xBrand == 'compumundo')
        ? xBrand
        : 'garba';

    var xSubdomain = headers['x-subdomain']
        ? headers['x-subdomain'].toLowerCase()
        : undefined;

    return { xBrand, folder, xSubdomain }
}
