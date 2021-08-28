const rewire = require("rewire")
const index = rewire("./index")
const nameRequired = index.__get__("nameRequired")
// @ponicode
describe("nameRequired", () => {
    test("0", () => {
        let callFunction = () => {
            nameRequired("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            nameRequired("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            nameRequired("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            nameRequired(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
