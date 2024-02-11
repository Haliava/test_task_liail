export const formatApiResponse = (apiResponse) => {
    return new Map(sortApiResponse(mapApiResponse(apiResponse), apiResponse.services));
}

export const mapApiResponse = (apiResponse) => {
    const apiMap = new Map();

    apiResponse.services.forEach(node => {
        if (!node.head) return;

        if (!apiMap.has(node.head)) apiMap.set(node.head, []);
        apiMap.set(node.head, [...apiMap.get(node.head), node.id]);
    }); // 1: [4,2,3,5]

    return apiMap;
}

export const sortApiResponse = (apiMap, apiEntries) => {
    return Array.from(apiMap.entries()).map(entry => {
        const [head, nodes] = entry;

        nodes.sort((node1, node2) => {
            const [sorthead1, sorthead2] = [
                +apiEntries[node1 - 1].sorthead,
                +apiEntries[node2 - 1].sorthead
            ];
            return sorthead1 - sorthead2;
        })

        return [head, nodes];
    })
}