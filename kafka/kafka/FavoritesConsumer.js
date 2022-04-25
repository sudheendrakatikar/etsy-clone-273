const kafkaConection = require('./connect')
const actions = require('./../actions/actions.json')

const UserService = require('./../services/UserService')

kafkaConection.getConsumer('favorites', (consumer) => {

    var producer = kafkaConection.getProducer()

    consumer.on('message', function (message) {
        var data = JSON.parse(message.value)
        const { payload, correlationId } = data
        const { action } = payload

        console.log('Consuming data from topic ...', action)

        if (action == actions.ADD_TO_FAVORITES) {

            UserService.addToFavorites(payload, (err, res) => {
                var payload = {}
                if (err) {
                    console.log('UserService failed:', err)
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
                    { topic: 'acknowledge', messages: JSON.stringify({ 'acknowledgementpayload': true, payload }), partition: 0 }
                ]
                producer.send(payloads, (err, data) => {
                    if (err) throw err
                    console.log('ACK message sent:', data)
                })
            })
        }

        if (action == actions.REMOVE_FROM_FAVORITES) {

            UserService.removeFromFavorites(payload, (err, res) => {
                var payload = {}
                if (err) {
                    console.log('UserService failed:', err)
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
                    { topic: 'acknowledge', messages: JSON.stringify({ 'acknowledgementpayload': true, payload }), partition: 0 }
                ]
                producer.send(payloads, (err, data) => {
                    if (err) throw err
                    console.log('ACK message sent:', data)
                })
            })
        }

        if (action == actions.MY_FAVORITES) {

            UserService.myFavorites(payload, (err, res) => {
                var payload = {}
                if (err) {
                    console.log('UserService failed:', err)
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
                    { topic: 'acknowledge', messages: JSON.stringify({ 'acknowledgementpayload': true, payload }), partition: 0 }
                ]
                producer.send(payloads, (err, data) => {
                    if (err) throw err
                    console.log('ACK message sent:', data)
                })
            })
        }
    })
})