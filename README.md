# Garba context

Devuelve las variables de contexto dado un request.
Variables:
- xBrand
- folder
- xSubdomain

`folder` solo aplica a listing, dado que las vistas estan en la carpeta "garba". Para las demas aplicaciones se puede usar `xBrand` como `folder`

## instalación

    npm i -S @garbarino/gb-context

## Uso

    var { xBrand, folder, xSubdomain } = require('gb-context');

