var expect = chai.expect
require('./another.coffee')

expect({ a: 'b' }).to.eql({ a: 'b' })
expect(1).to.be.ok()
expect(0).not.to.be.ok()
