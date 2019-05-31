/**
 * Recibe los headers del request y devuelve un objeto con
 * xBrand, xSubdomain y salesCompany
 */
module.exports = ({ headers: { 'x-brand': xBrand, 'x-subdomain': xSubdomain } }) => ({
    xBrand: xBrand ? xBrand.toLowerCase() : 'garbarino',
    xSubdomain: xSubdomain ? xSubdomain.toLowerCase() : undefined,
    salesCompany: xSubdomain === 'empresas'
});
