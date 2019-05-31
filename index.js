/**
 * devuelvo un objeto con xBrand y folder segun request
 */
module.exports = ({ headers }) => {
    var xBrand = headers['x-brand'] ? headers['x-brand'].toLowerCase() : 'garbarino';
    var xSubdomain = headers['x-subdomain'] ? headers['x-subdomain'].toLowerCase() : undefined;

    return {
        xBrand,
        xSubdomain,
        salesCompany: xSubdomain === 'empresas'
    };
}
