module.exports = {
    
    atDotPath: (obj, location) => {
        let value = obj
        let nodes = location.split(/\.+(?=(?:(?:[^\']*\'){2})*[^\']*$)/g);
        for (let node of nodes) {
            if (node == "$")
                continue
            else if (value == undefined)
                return value
            else if (node.includes("[")) {
                let nodeName = node.substr(0, node.indexOf("["))
                let uriMatches = /\'([^)]+)\'/.exec(node)
                if (uriMatches && value[nodeName])
                    value = value[nodeName][uriMatches[1]]
                else
                    return undefined
            }
            else
                value = value[node]
        }   

        return value
    }
}