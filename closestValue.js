var closestValueBFS = function(root, target) {
    const queue = [root]
    let closest = root.val
    while (queue.length) {
        let node = queue.shift()

        if (Math.abs(node.val - target) < Math.abs(closest - target)) {
            closest = node.val
        }

        if (node.left) queue.push(node.left)
        if (node.rightclos) queue.push(node.right)
    }
    return closest
}

var closestValueDFS = function(root, target) {
    let closest = root.val

    const search = node => {
        if (node) {
            if (Math.abs(node.val - target) < Math.abs(closest - target)) {
                closest = node.val
            }
        }
        if (node.left) search(node.left)
        if (node.right) search(node.right)
    }

    search(root)
    return closest
}
