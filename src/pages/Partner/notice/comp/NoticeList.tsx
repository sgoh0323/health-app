/* eslint-disable */
import { Row, Col, Button } from 'antd';
import { uniqueId } from 'lodash';
import { Pagenation } from 'components';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { EnterOutlined } from '@ant-design/icons';

const NoticeList = props => {
    const {
        data,
        page,
        onRowSelected,
        onChangePage,
        onShowSizeChange,
        moveAddPage,
        fileDownload,
        setGridApi,
        onClickDelete
    } = props;
    const onGridReady = params => {
        setGridApi(params.api);
        // setGridColumnApi(params.columnApi);
    };
    const getStsContent = params => {
        if (params.data) {
            return (
                <>
                    <div>
                        {params.value}
                        <span style={{ color: 'red' }}>
                            {Number(params.data?.articleReplyCnt) > 0 ? `  [${params.data?.articleReplyCnt}]` : ''}
                        </span>
                    </div>
                    {params.data?.answerTitle && (
                        <div style={{ paddingLeft: '10px', marginTop: '-5px' }}>
                            <div style={{ display: 'inline-flex' }}>
                                <EnterOutlined style={{ transform: 'scaleX(-1)' }} />
                            </div>
                            {params.data?.answerTitle}
                            <span style={{ color: 'red' }}>
                                {Number(params.data?.articleAnswerReplyCnt) > 0
                                    ? `  [${params.data?.articleAnswerReplyCnt}]`
                                    : ''}
                            </span>
                        </div>
                    )}
                </>
            );
        }
        return <div />;
    };
    const gridOptions = {
        columnDefs: [
            {
                field: 'number',
                headerName: 'No.',
                minWidth: 30,
                headerCheckboxSelection: true,
                checkboxSelection: true
            },
            {
                field: 'noticeTargetFormat',
                headerName: '대상'
            },
            {
                field: 'title',
                headerName: '제목',
                minWidth: 300,
                cellClass: 'tal',
                cellRendererFramework: getStsContent
            },
            {
                field: 'isConfirmFormat',
                headerName: '확인여부',
                minWidth: 30
            },
            {
                field: 'isTopFixFormat',
                headerName: '상단고정',
                minWidth: 30
            },
            {
                field: 'isUseFormat',
                headerName: '노출',
                minWidth: 60
            },
            {
                field: 'registerName',
                headerName: '등록자'
            },
            {
                field: 'registDate',
                headerName: '등록일시'
            },
            {
                field: 'updaterName',
                headerName: '최종수정자'
            },
            {
                field: 'updateDate',
                headerName: '최종수정일시'
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
                        <Button type="primary" onClick={moveAddPage}>
                            등록
                        </Button>
                        <Button type="primary" onClick={onClickDelete}>
                            삭제
                        </Button>
                        {/* &nbsp;
                        <Button type="primary" onClick={fileDownload}>
                            엑셀다운로드
                        </Button> */}
                    </Col>
                </Row>
                <div
                    className="ag-grid-custom__grid ag-theme-balham"
                    // style={{ width: '100%', height: '48.362vh' }}>
                    style={{ width: '100%', height: '450px' }}>
                    <AgGridReact
                        rowData={data.list}
                        gridOptions={gridOptions}
                        onGridReady={onGridReady}
                        enableRangeSelection
                        onRowDoubleClicked={onRowSelected}
                        enableBrowserTooltips
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
export default NoticeList;
