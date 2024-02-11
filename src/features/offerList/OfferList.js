import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {TreeView} from "@mui/x-tree-view";
import Offer from "./offer";

const OfferList = ({data, apiResponse}) => {
    const heads = apiResponse.filter(entry => !entry.head);

    const renderChildren = (parentNode) => {
        if (!parentNode) return;
        return (
            <Offer label={parentNode.name} price={parentNode.price} nodeId={''+parentNode.id}>
                {data.get(parentNode.id)?.map(child => (
                    renderChildren(apiResponse[child - 1])
                ))}
            </Offer>
        );
    }

    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx = {{width: '40vw'}}
        >
            {heads.map(headElem => (
                renderChildren(headElem)
            ))}
        </TreeView>
    );
};

export default OfferList;