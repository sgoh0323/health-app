import { Row, Col, Button, Checkbox, Image } from 'antd';
import { uniqueId } from 'lodash';
import { Pagenation } from 'components';
import React, { useCallback, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { EnterOutlined } from '@ant-design/icons';

const DirectList = props => {
    const {
        data,
        page,
        onRowSelected,
        onChangePage,
        onShowSizeChange,
        moveAddPage,
        fileDownload,
        setGridApi,
        onClickDelete,
        gridApi,
        onClickStatusButton
    } = props;
    const onGridReady = params => {
        setGridApi(params.api);
        // setGridColumnApi(params.columnApi);
    };
    const [imgViewHide, setImgViewHide] = useState(false);
    const imageRenderer = params => {
        if (params.data.productUrl) {
            return <Image width={36} src={params.data.productUrl} />;
        }
        return <div />;
    };

    const buttonRenderer = params => {
        if (params.data.status === 100) {
            return <Button>준비처리</Button>;
        }
        return <div />;
    };
    const onCellClicked = params => {
        if (params.colDef.headerName === '준비처리' && params.data.status === 100) {
            onClickStatusButton(params.data.idx);
        }
    };
    const getGridOptions = useCallback(
        (param = false) => {
            return {
                columnDefs: [
                    {
                        field: 'number',
                        headerName: 'No.',
                        minWidth: 10,
                        headerCheckboxSelection: true,
                        checkboxSelection: true
                    },
                    {
                        field: 'idx',
                        headerName: 'idx',
                        hide: true
                    },
                    {
                        field: 'statusFormat',
                        headerName: '상태',
                        minWidth: 50
                    },
                    {
                        field: 'status',
                        headerName: '준비처리',
                        cellClass: 'tal',
                        cellRendererFramework: buttonRenderer
                    },
                    {
                        field: 'targetTypeFormat',
                        headerName: '문의대상'
                    },
                    {
                        field: 'content',
                        headerName: '내용',
                        minWidth: 250
                    },
                    {
                        field: 'questionName',
                        headerName: '문의자'
                    },
                    {
                        field: 'companyName',
                        headerName: '업체명'
                    },
                    {
                        field: 'regdateFormat',
                        headerName: '문의등록일시'
                    },
                    {
                        field: 'answerId',
                        headerName: '최초답변자'
                    },
                    {
                        field: 'answerDateFormat',
                        headerName: '최초답변일시'
                    },
                    {
                        field: 'productCode',
                        headerName: '상품코드'
                    },
                    {
                        field: 'productUrl',
                        headerName: '상품이미지',
                        cellRendererFramework: imageRenderer,
                        hide: param
                    },
                    {
                        field: 'updateName',
                        headerName: '최종수정자'
                    },
                    {
                        field: 'updateDateFormat',
                        headerName: '최종수정일시'
                    }
                ],
                headerHeight: 35,
                rowHeight: 41,
                defaultColDef: {
                    flex: 1,
                    minWidth: 80,
                    editable: false,
                    resizable: true,
                    sortable: true
                },
                suppressRowClickSelection: true,
                rowSelection: 'multiple'
            };
        },
        [imgViewHide]
    );
    const onChangeImageCheckbox = param => {
        setImgViewHide(!param.target.checked);
        gridApi.setColumnDefs(getGridOptions(!param.target.checked).columnDefs);
    };
    return (
        <div className="ag-grid-custom">
            <div style={{ backgroundColor: 'white', padding: '20px' }}>
                <Row key={uniqueId()} style={{ marginBottom: '10px' }}>
                    <Col span={12}>
                        {/* <Button type="primary" onClick={moveAddPage}>
                            신규등록
                        </Button> */}
                    </Col>
                    <Col span={12} style={{ textAlign: 'end' }}>
                        <Checkbox checked={!imgViewHide} onChange={onChangeImageCheckbox}>
                            이미지포함
                        </Checkbox>
                        <Button type="primary" onClick={onClickDelete}>
                            선택삭제
                        </Button>
                        &nbsp;
                        <Button type="primary" onClick={fileDownload}>
                            엑셀다운로드
                        </Button>
                    </Col>
                </Row>
                <div
                    className="ag-grid-custom__grid ag-theme-balham"
                    // style={{ width: '100%', height: '48.362vh' }}>
                    style={{ width: '100%', height: '450px' }}>
                    <AgGridReact
                        rowData={data.list}
                        gridOptions={getGridOptions()}
                        onGridReady={onGridReady}
                        enableRangeSelection
                        onRowDoubleClicked={onRowSelected}
                        onCellClicked={onCellClicked}
                    />
                </div>
                <div className="page-box" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Pagenation
                        total={data.total}
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
export default DirectList;
