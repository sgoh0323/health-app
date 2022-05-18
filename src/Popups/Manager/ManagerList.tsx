import { Row, Col, Button } from 'antd';
import { uniqueId } from 'lodash';
import { Pagenation } from 'components';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';

const nameRenderer = params => {
    if (params.data && params.data.id) {
        return (
            <div>
                {params.data.name} ( {params.data.id} )
            </div>
        );
    } else if (params.data) {
        return <div>{params.data.name} </div>;
    }
    return <div />;
};

const gridOptions = {
    columnDefs: [
        {
            field: 'number',
            headerName: 'No.',
            minWidth: 20,
            headerCheckboxSelection: true,
            checkboxSelection: true
        },
        {
            field: 'id',
            headerName: 'id',
            minWidth: 20,
            // headerCheckboxSelection: true,
            // checkboxSelection: true
            hide: true
        },
        {
            field: 'userTypeFormat',
            headerName: '구분'
        },
        {
            field: 'mdName',
            headerName: '담당MD',
            minWidth: 30,
            cellClass: 'tal'
        },
        {
            field: 'name',
            headerName: '업체명/관리자명',
            minWidth: 100,
            cellRendererFramework: nameRenderer
        }
    ],
    headerHeight: 35,
    rowHeight: 41,
    defaultColDef: {
        flex: 1,
        minWidth: 120,
        editable: false,
        resizable: true,
        sortable: true
    },
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
};
const NoticeList = props => {
    const { data, onRowSelected, page, setPage, onChangePage, onShowSizeChange, setGridApi } = props;
    const onGridReady = params => {
        // setGridApi(params.api);
        setGridApi(params.api);
        // setGridColumnApi(params.columnApi);
    };

    return (
        <div className="ag-grid-custom">
            <div style={{ backgroundColor: 'white' }}>
                <div
                    className="ag-grid-custom__grid ag-theme-balham"
                    // style={{ width: '100%', height: '48.362vh' }}>
                    style={{ width: '100%', height: '450px' }}>
                    <AgGridReact
                        rowData={data?.result?.list}
                        gridOptions={gridOptions}
                        onGridReady={onGridReady}
                        enableRangeSelection
                        onRowDoubleClicked={onRowSelected}
                        // onCellClicked={node => {
                        //     setItem(node.data);
                        // }}
                    />
                </div>
                <div className="page-box" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Pagenation
                        total={data?.result?.total}
                        current={page}
                        onChange={onChangePage}
                        showSizeChanger
                        defaultPageSize={10}
                        onShowSizeChange={onShowSizeChange}
                    />
                </div>
            </div>
        </div>
    );
};
export default NoticeList;
