/* eslint-disable */
import { Row, Col, Button, Image } from 'antd';
import _, { uniqueId } from 'lodash';
import { Pagenation } from 'components';
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import modal from 'helper/customModal';
import { numberWithCommas } from 'helper/recycle';

const imageRenderer = params => {
    if (params.data) {
        return <Image width={36} src={params.value} />;
    }
    return <div />;
};

const BrandGrid = props => {
    const { data, setData, onlyGrid, onChangePage, onShowSizeChange, page, brand, setBrand } = props;
    const [gridApi, setGridApi] = useState<any>();

    const gridOptions = {
        columnDefs: [
            {
                field: 'brCode',
                headerName: '브랜드코드',
                headerCheckboxSelection: true,
                checkboxSelection: true
            },
            {
                field: 'brName',
                headerName: '브랜드명(한글)',
                minWidth: 100
            },
            {
                field: 'brEngName',
                headerName: '브랜드명(영문)'
            },
            // {
            //     field: 'brLogoImgUrl',
            //     headerName: '브랜드로고',
            //     minWidth: 100,
            //     cellRendererFramework: imageRenderer
            // },
            {
                field: 'brCommissionRate',
                headerName: '수수료',
                minWidth: 100
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
        rowSelection: 'multiple',

        groupSelectsChildren: true,
        stopEditingWhenGridLosesFocus: true,
        singleClickEdit: true
    };

    const onGridReady = params => {
        setGridApi(params.api);
        console.log('onGridReady');
        // setGridColumnApi(params.columnApi);
    };

    const onRowSelected = e => {
        const tmpBrand = [...brand];
        e.api.forEachNode(i => {
            if (i.selected) {
                if (_.findIndex(tmpBrand, { brCode: i.data.brCode }) === -1) {
                    tmpBrand.push(i.data);
                }
            } else if (!i.selected && _.findIndex(tmpBrand, { brCode: i.data.brCode }) > -1) {
                console.log('delete');
                _.remove(tmpBrand, n => {
                    return n.brCode === i.data.brCode;
                });
            }
        });
        setBrand(tmpBrand);
        // if (e.node.selected === false) {
        //     if (_.findIndex(brand, e.node.data) > -1) {
        //         setBrand(brand.filter(i => i !== e.node.data));
        //     }
        // }
        // if (_.findIndex(brand, e.node.data) === -1) {
        //     setBrand([...brand, e.node.data]);
        // }
    };
    const onRowDataChanged = e => {
        e.api.forEachNode(i => {
            if (i.selected && _.findIndex(brand, i.data) === -1) {
                i.setSelected(false);
            } else if (_.findIndex(brand, i.data) > -1) {
                i.setSelected(true);
            }
        });
    };

    const onClickDelete = params => {
        if (gridApi) {
            console.log('onClickDelete111');
            const nodes = gridApi.getSelectedNodes();
            console.log('nodes');
            console.log(nodes);
            if (nodes.length > 0) {
                const deleteItems = nodes.map(item => {
                    return item.data.brCode;
                });
                setData([...data.filter(item => !deleteItems.includes(item.brCode))]);
            } else {
                modal.msg('001');
            }
        }
        return '';
    };
    useEffect(() => {
        if (gridApi && brand) {
            gridApi.forEachNode(i => {
                if (i.selected && _.findIndex(brand, i.data) === -1) {
                    i.setSelected(false);
                } else if (_.findIndex(brand, i.data) > -1) {
                    i.setSelected(true);
                }
            });
        }
    }, [brand]);
    return (
        <div className="ag-grid-custom">
            <div style={{ backgroundColor: 'white', padding: '0px' }}>
                <Row align="bottom" key={uniqueId()} style={{ marginBottom: '10px', marginTop: '-12px' }}>
                    <Col span={24}>
                        검색결과 : <span style={{ color: 'red' }}>({numberWithCommas(data?.total)}건)</span>
                    </Col>
                </Row>
                <div
                    className="ag-grid-custom__grid ag-theme-balham"
                    // style={{ width: '100%', height: '48.362vh' }}>
                    style={{ width: '100%', height: '450px' }}>
                    <AgGridReact
                        rowData={data?.list || []}
                        gridOptions={gridOptions}
                        onGridReady={onGridReady}
                        enableRangeSelection
                        // onSelectionChanged={onSelectionChanged}
                        // onSelectionChanged={e => {
                        //     console.log('onShowSizeChange');
                        //     console.log(e);
                        // }}
                        onRowSelected={onRowSelected}
                        // onRowSelected={e => {
                        //     e.api.forEachNode;
                        // }}
                        loadingOverlayComponent=""
                        onRowDataChanged={onRowDataChanged}
                    />
                </div>
                <div className="page-box" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Pagenation
                        total={data?.total}
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
export default BrandGrid;
