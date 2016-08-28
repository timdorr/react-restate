const ReactMultiChild = require('react/lib/ReactMultiChild')

const MinimumViableComponent = function(element) {
  this.node = null
  this._mountImage = null
  this._renderedChildren = null
  this._currentElement = element
}

MinimumViableComponent.prototype = Object.assign(
  {
    getPublicInstance() {},
    mountComponent() {},
    receiveComponent() {},
    unmountComponent() {},
    getNativeNode() {},
    getHostNode() {}
  },
  ReactMultiChild.Mixin
)

const Component = function(element) {
  this.node = null
  this._mountImage = null
  this._renderedChildren = null
  this._currentElement = element
}

const ComponentMixin = {
  getPublicInstance() {
    return this.node
  },

  mountComponent(
    transaction,
    nativeParent,
    nativeContainerInfo,
    context
  ) {
    this.node = this._currentElement
    this.mountChildren(this.node.children, transaction, context)

    return this.node
  },

  receiveComponent(nextElement, transaction, context) {
    const prevElement = this._currentElement
    this._currentElement = nextElement

    this.updateChildren(nextElement.props.children, transaction, context)
  },
  getHostNode() {},
  unmountComponent() {},
}

Object.assign(
  Component.prototype,
  ComponentMixin,
  ReactMultiChild.Mixin
)

module.exports = Component
