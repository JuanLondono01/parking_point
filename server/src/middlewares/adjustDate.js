function adjustDateToColombia(next) {
    let ahora = new Date();

    // Obtener la hora UTC y ajustar a la zona horaria de Colombia (GMT-5)
    let utcHoras = ahora.getUTCHours();
    let colombiaHoras = utcHoras - 5;
    
    // Ajustar la fecha si la hora es negativa
    if (colombiaHoras < 0) {
        colombiaHoras += 24;
        ahora.setUTCDate(ahora.getUTCDate() - 1);
    }
    
    ahora.setUTCHours(colombiaHoras);

    this.date = ahora;
    next();
}

module.exports = adjustDateToColombia;