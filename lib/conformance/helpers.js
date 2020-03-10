const helpers = {
    
    dotNodes: (location) => {
        let dottedNodes = location.split(/\.+(?=(?:(?:[^\']*\'){2})*[^\']*$)/g);
        return [].concat(...dottedNodes.map(node => {
            if (node.includes("[")) {
                let nodeName = node.substr(0, node.indexOf("["))
                let uriMatches = /\'([^)]+)\'/.exec(node)
                if (uriMatches)
                    return [nodeName, uriMatches[1]]
                else
                    return node
            }
            else 
                return node
        }))
    },

    atDotPath: (obj, location) => {
        let value = obj
        let nodes = helpers.dotNodes(location)

        for (let node of nodes) {
            if (node == "$")
                continue
            else if (value == undefined)
                return value
            else
                value = value[node]
        }   

        return value
    },

    setDotPath: (obj, location, value) => {
        let pathObj = obj
        let nodes = helpers.dotNodes(location)

        for (let index in nodes) {
            let node = nodes[index]
            if (node == "$")
                continue
            
            if (index == nodes.length - 1)
                pathObj[node] = value
            else if (pathObj[node] == undefined)
                pathObj[node] = {}
            
            pathObj = pathObj[node]
        }
    }
}

module.exports = helpers