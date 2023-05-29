async function getAPI() {
    app.use('/getsome', (req, res) => {
        console.log('data: 123')
    })
}

module.exports = {
    getAPI
}