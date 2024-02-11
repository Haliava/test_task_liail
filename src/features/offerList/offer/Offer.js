import React from 'react';
import {TreeItem} from "@mui/x-tree-view";

function Offer({children, nodeId, label, price}) {
    return (
        <TreeItem nodeId={nodeId} label={`${label}\t${price === 0 ? '': String(price) + 'руб'}`}>
            {children}
        </TreeItem>
    );
}

export default Offer;