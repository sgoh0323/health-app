/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Breadcrumb, Form, Radio, Modal } from 'antd';
import { uniqueId } from 'lodash';
import {
    apiExcelFileDownload,
    deleteNotices,
    deletePatnerAnswers,
    deletePatnerQuestions,
    getNotices,
    getPatnerQuestions,
    putPatnerQuestionsStatus
} from 'api/partner/noticesApi';
import useLoding from 'hooks/useLoding';
import { numberWithCommas } from 'helper/recycle';
import { useHistory } from 'react-router-dom';
import DetailContainer from '../detail';
import DirectFilter from '../comp/DirectFilter';
import NoticeList from '../comp/DirectList';
import { apiFileDownload } from 'api/common/commonApi';
import modal from 'helper/customModal';

const DirectList: React.FunctionComponent = () => {
    const [rowDatas, setRowDatas] = useState<any>({});
    const [total, setTotal] = useState(0);
    const [selectItem, setSelectItem] = useState<any>();
    const [form] = Form.useForm();
    const [searchParams, setSearchParams] = useState<any>({});
    const [gridApi, setGridApi] = useState(null);
    const history = useHistory();
    const { setLoading } = useLoding();

    const onChangePage = page => {
        setSearchParams({ ...searchParams, page: page });
        handleSearchData({ ...searchParams, page: page });
    };
    const onShowSizeChange = (page, size) => {
        console.log(page, ' : ', size);
        // setSearchParams({ ...searchParams, page: page });
    };
    const onSearch = () => {
        let searchValues = form.getFieldsValue();
        searchValues.startDate = moment(searchValues.startDate).format('yyyy-MM-DD');
        searchValues.endDate = moment(searchValues.endDate).format('yyyy-MM-DD');

        // 게시물이 적어서 우선 대상자를 제외 시킴
        // delete searchValues.noticeTarget;

        setSearchParams({ ...searchValues, page: 1, limit: 10 });
        handleSearchData({ ...searchValues, page: 1, limit: 10 });
    };

    const handleSearchData = param => {
        console.log(param.questionStatus);
        setLoading(
            getPatnerQuestions(
                { ...param, questionStatus: param.questionStatus === 999 ? undefined : param.questionStatus },
                data => {
                    setRowDatas(data?.result);
                    setTotal(data?.result.total);
                }
            )
        );
    };
    const moveAddPage = param => {
        history.push('/partner/notice/new');
    };
    useEffect(() => {
        // handleSearchData(searchParams);
        onSearch();
    }, []);

    const onRowSelected = event => {
        // history.push(`/notices/notice/${event.data.articleIdx}`);
        setSelectItem(event.data);
    };
    const hideModal = isChaged => {
        // history.push(`/notices/notice/${event.data.articleIdx}`);
        setSelectItem(undefined);
        if (isChaged) {
            handleSearchData(searchParams);
        }
    };
    const fileDownload = () => {
        setLoading(
            apiExcelFileDownload({
                url: '/board-api/cms/partners/question/excel',
                fileNm: `공지사항_${moment().format('yyyyMMddHHmmss')}.xls`,
                params: searchParams
            })
        );
    };
    const onClickDelete = () => {
        const nodes = gridApi.getSelectedNodes();
        const idxs = nodes.map(item => {
            return item.data.idx;
        });
        if (idxs.length === 0) {
            return modal.msg('001');
        }
        modal.msg('102', '', () => {
            deletePatnerAnswers({ removeIdxs: idxs }, () => {
                onSearch();
            });
        });
    };
    const onClickStatusButton = useCallback(
        (idx, param) => {
            setLoading(
                putPatnerQuestionsStatus({ idx, status: 500 }, () => {
                    handleSearchData(searchParams);
                })
            );
        },
        [searchParams]
    );
    return (
        <>
            <section className="page_content">
                <Breadcrumb className="title-navi__navi">
                    <Breadcrumb.Item className="title-navi__navi__home">파트너 게시판관리</Breadcrumb.Item>
                    <Breadcrumb.Item className="title-navi__navi__parent">파트너 1:1문의</Breadcrumb.Item>
                </Breadcrumb>
                <Form form={form} layout="horizontal">
                    <Row align="bottom" key={uniqueId()} style={{ marginBottom: '10px', marginTop: '-12px' }}>
                        <Col span={12}>검색조건</Col>
                        <Col span={12} style={{ textAlign: 'end' }}>
                            <Button type="primary" htmlType="submit" onClick={onSearch}>
                                조회
                            </Button>
                            &nbsp;
                            <Button type="primary" htmlType="reset">
                                초기화
                            </Button>
                        </Col>
                    </Row>
                    <DirectFilter form={form} />
                </Form>
                <Row align="bottom" key={uniqueId()} style={{ marginBottom: '10px', marginTop: '-12px' }}>
                    <Col span={24}>
                        검색결과 : <span style={{ color: 'red' }}>({numberWithCommas(total)}건)</span>
                    </Col>
                </Row>
                {rowDatas && (
                    <NoticeList
                        data={rowDatas}
                        page={searchParams?.page}
                        onRowSelected={onRowSelected}
                        onChangePage={onChangePage}
                        onShowSizeChange={onShowSizeChange}
                        moveAddPage={moveAddPage}
                        fileDownload={fileDownload}
                        setGridApi={setGridApi}
                        onClickDelete={onClickDelete}
                        gridApi={gridApi}
                        onClickStatusButton={onClickStatusButton}
                    />
                )}
            </section>
            <div>{selectItem && <DetailContainer idx={selectItem.idx} hideModal={hideModal} />}</div>
        </>
    );
};

export default DirectList;
