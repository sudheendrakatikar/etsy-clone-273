const kafkaConection = require('./connect')
const actions = require('./../actions/actions.json')

const SellerService = require('./../services/SellerService')

kafkaConection.getConsumer('sellers', (consumer) => {

    var producer = kafkaConection.getProducer()

    consumer.on('message', function (message) {
        var data = JSON.parse(message.value)
        const { payload, correlationId } = data
        const { action } = payload

        console.log('Consuming data from topic ...', action)

        if (action == actions.CREATE_SELLER) {
            SellerService.createSeller(payload, (err, res) => {
                var payload = {}
                if (err) {
                    console.log('SellerService failed:', err)
                    payload = {
                        status: 400,
                        content: err,
                        correlationId: correlationId
                    }
                }

                if (res) {
                    payload = {
                        status: 200,
                        content: res,
                        correlationId: correlationId
                    }
                }
                console.log(payload)
                //Send Response to acknowledge topic
                payloads = [
                    { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
                ]
                console.log(payload)
                producer.send(payloads, (err, data) => {
                    if (err) throw err
                    console.log('ACK message sent:', data)
                })
            })
        }

        if (action == actions.UPDATE_SHOP) {

            SellerService.updateShop(payload, (err, res) => {
                var payload = {}
                if (err) {
                    console.log('SellerService failed:', err)
                    payload = {
                        status: 400,
                        content: err,
                        correlationId: correlationId
                    }
                }

                if (res) {
                    payload = {
                        status: 200,
                        content: res,
                        correlationId: correlationId
                    }
                }
                console.log(payload)
                //Send Response to acknowledge topic
                payloads = [
                    { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
                ]
                producer.send(payloads, (err, data) => {
                    if (err) throw err
                    console.log('ACK message sent:', data)
                })
            })
        }

        if (action == actions.CHECK_AVAILABILITY) {

            SellerService.checkAvailability(payload, (err, res) => {
                var payload = {}
                if (err) {
                    console.log('SellerService failed:', err)
                    payload = {
                        status: 400,
                        content: err,
                        correlationId: correlationId
                    }
                }

                if (res) {
                    payload = {
                        status: 200,
                        content: res,
                        correlationId: correlationId
                    }
                }
                console.log(payload)
                //Send Response to acknowledge topic
                payloads = [
                    { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
                ]
                producer.send(payloads, (err, data) => {
                    if (err) throw err
                    console.log('ACK message sent:', data)
                })
            })
        }

        if (action == actions.GET_SHOPS_BY_NAME) {

            SellerService.getShopsByName(payload, (err, res) => {
                var payload = {}
                if (err) {
                    console.log('SellerService failed:', err)
                    payload = {
                        status: 400,
                        content: err,
                        correlationId: correlationId
                    }
                }

                if (res) {
                    payload = {
                        status: 200,
                        content: res,
                        correlationId: correlationId
                    }
                }
                console.log(payload)
                //Send Response to acknowledge topic
                payloads = [
                    { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
                ]
                producer.send(payloads, (err, data) => {
                    if (err) throw err
                    console.log('ACK message sent:', data)
                })
            })
        }

        if (action == actions.MY_SHOPS) {

            SellerService.myShops(payload, (err, res) => {
                var payload = {}
                if (err) {
                    console.log('SellerService failed:', err)
                    payload = {
                        status: 400,
                        content: err,
                        correlationId: correlationId
                    }
                }

                if (res) {
                    payload = {
                        status: 200,
                        content: res,
                        correlationId: correlationId
                    }
                }
                console.log(payload)
                //Send Response to acknowledge topic
                payloads = [
                    { topic: 'acknowledge', messages: JSON.stringify({ "acknowledgementpayload": true, payload }), partition: 0 }
                ]
                producer.send(payloads, (err, data) => {
                    if (err) throw err
                    console.log('ACK message sent:', data)
                })
            })
        }
    })
})