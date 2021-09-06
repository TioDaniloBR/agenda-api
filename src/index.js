
module.exports = (app) => {
    app.use('/', require('./modules/healtcheck'));
    app.use('/agenda', require('./modules/agenda'));
}
