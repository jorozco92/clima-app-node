const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//argv.direccion

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

//clima.getClima(10.000000, -84.220001)
//    .then(console.log)
//    .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo obtener el clima de ${direccion},`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);