const invariant = require('fbjs/lib/invariant')
const ReactElement = require('react/lib/ReactElement')

const instantiateReactComponent = require('react/lib/instantiateReactComponent')
const ReactInstanceHandles = require('react/lib/ReactInstanceHandles')
const ReactUpdates = require('react/lib/ReactUpdates')
const ReactReconciler = require('react/lib/ReactReconciler')
const Injection = require('./injection')

Injection.inject()

const render = (
  element,
  callback
) => {

  invariant(
    ReactElement.isValidElement(element),
    'render(): You must pass a valid ReactElement.'
  )

  const rootId = ReactInstanceHandles.createReactRootID(0)
  const component = instantiateReactComponent(element)

  ReactUpdates.batchedUpdates(() => {
    const transaction = ReactUpdates.ReactReconcileTransaction.getPooled()

    transaction.perform(() => {
      ReactReconciler.mountComponent(
        component,
        transaction,
        rootId,
        {_idCounter: 1},
        {},
        0
      )

      if (callback) {
        callback(component.getPublicInstance())
      }
    })
    ReactUpdates.ReactReconcileTransaction.release(transaction)
  })
}

module.exports = render
