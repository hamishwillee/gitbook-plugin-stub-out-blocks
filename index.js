module.exports = {
    blocks: {
        mermaid: {
            process: function(block) {
                return block.body;
            }
        }
    }
};