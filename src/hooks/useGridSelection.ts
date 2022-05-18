import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { useCallback } from 'react';

export const useGridSelection = () => {
    let gridApi: GridApi;

    const onGridReady = useCallback((event: GridReadyEvent) => {
        gridApi = event.api;
        console.log('gridApi', gridApi);
    }, []);

    const getSelection = useCallback(() => gridApi?.getSelectedNodes() ?? [], [gridApi]);

    return {
        onGridReady,
        getSelection
    };
};
