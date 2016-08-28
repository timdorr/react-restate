const ReactInjection = require('react/lib/ReactInjection')
const ReactDefaultBatchingStrategy = require('react/lib/ReactDefaultBatchingStrategy')
const ReactComponentEnvironment = require('react/lib/ReactComponentEnvironment')

const RestateReconcileTransaction = require('./reconcileTransaction')
const Component = require('./component')

function inject() {
  (ReactInjection.NativeComponent || ReactInjection.HostComponent).injectGenericComponentClass(
    Component
  )

  ReactInjection.Updates.injectReconcileTransaction(
    RestateReconcileTransaction
  )

  ReactInjection.Updates.injectBatchingStrategy(
    ReactDefaultBatchingStrategy
  )
}

module.exports = {inject}
