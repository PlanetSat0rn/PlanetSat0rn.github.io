class NitroBlock {
    getInfo() {
        return {
            "id": "test",
            "name": "test",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "letters [num1] through [num2] of [string]",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "2"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "5"
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "hello world"
                        }
                    }
                },
            }],
        "menus": { //later
        }
    };
    substringy({num1, num2, string}) {
        return string.substring(num1 - 1, num2);
    };
}
