/* eslint-disable */
import { Breadcrumb, Button, Col, Form, Input, Row, Tree } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { ColorPicker, CustomUpload, FilterRangePicker, PostcodePopup } from 'components';
import CustomDownload from 'components/customDownload';
import modal from 'helper/customModal';
import { uniqueId } from 'lodash';
import ManagerPopup from 'Popups/Manager';
import React, { useState, useEffect } from 'react';
import { alertMsg } from 'types/Common/AlertMassege';

const SampleContainer: React.FunctionComponent = () => {
    const [adress, setAdress] = useState<any>();
    const [manager, setManager] = useState<any>();
    const [color, setColor] = useState<any>();
    const [uploadFiles, setUploadFiles] = useState<File[]>([]);
    const [downloadFiles, setDownloadFiles] = useState([
        {
            idx: 1,
            fileName: 'test.jpg'
        },
        {
            idx: 2,
            fileName: 'test.jpg'
        }
    ]);
    const [treeData, setTreeData] = useState([
        { title: 'Dashboard', key: 'dashboard' },
        {
            title: '고객회원관리',
            expanded: true,
            key: 'customerMgmt',
            children: [
                { key: 'customerList', title: '회원정보조회' },
                { key: 'customerNew', title: '회원추가' },
                { key: 'customerOutList', title: '탈퇴회원조회' }
            ]
        },
        {
            title: '파트너사 게시판관리',
            expanded: true,
            key: 'partnerMgmt',
            children: [
                { key: 'partnerNoticeList', title: '파트너 공지사항 조회' },
                { key: 'partnerNoticeNew', title: '공지사항 등록' },
                { key: 'partnerDirectList', title: '파트너 1:1 문의' }
            ]
        }
    ]);

    const onChangeTreeData = e => {
        console.log('onChangeTreeData');
        console.log(e);
        setTreeData([...e]);
    };
    const [form] = useForm();
    const onCheck = checkedKeys => {
        console.log(checkedKeys);
    };
    const onDragEnd = ({ event, node }) => {
        console.log('onDragEnd');
        console.log(event);
        console.log(node);
    };
    const onDragOver = ({ event, node }) => {
        console.log('onDragOver');
        console.log(event);
        console.log(node);
    };
    return (
        <>
            <section className="page_content">
                <Breadcrumb className="title-navi__navi">
                    <Breadcrumb.Item className="title-navi__navi__home">회원관리</Breadcrumb.Item>
                    <Breadcrumb.Item className="title-navi__navi__parent">회원정보 조회/수정</Breadcrumb.Item>
                </Breadcrumb>
                hooks :<br></br>
                로딩바
                <br />
                로딩바를 사용하고자하는 API를 setLoading(호출API) 안에 넣어주면 됩니다. <br />
                로딩바가 필요한 API에 선택적으로 사용하시기 바랍니다
                <br />
                <br />
                ex )<br />
                import useLoding from 'hooks/useLoding';
                <br />
                <br />
                const &#123; setLoading &#125; = useLoding();
                <br />
                <br />
                <p>
                    setLoading(
                    <br />
                    &nbsp;&nbsp;getDirectQuestions(param, data =&gt; &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;setRowDatas(data?.result);
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;setTotal(data?.result.total);
                    <br />
                    &nbsp;&nbsp;&#125;)
                    <br />
                    );
                    <br />
                </p>
                <br />
                <br />
                <br />
                Popups:
                <br />
                <Input value={adress?.address} style={{ width: '30%' }} />
                <PostcodePopup setPostCode={setAdress} />
                <br />
                <Input value={manager?.name} style={{ width: '30%' }} />
                <ManagerPopup setValue={setManager} />
                <br />
                <Row>
                    <Col className="data" span={20}>
                        <ColorPicker />
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                MeaasgeModal:
                <br />
                1. 메세지 코드만 사용 ex) modal.msg('001'); <br />
                2. 추가 단어 + 메세지코드 ex) modal.msg('002','이름')
                <br />
                3. 확인 메세지 ex)modal.msg('101','회원정보를',// 확인시 함수,// 취소시 함수 )<br />
                <div className="content__contentbox__table">
                    {Object.keys(alertMsg).map(item => {
                        return (
                            <Row
                                key={uniqueId()}
                                onClick={() => {
                                    modal.msg(item);
                                }}>
                                <Col className="label" span={3}>
                                    {item}
                                </Col>
                                <Col className="data" span={10}>
                                    {alertMsg[item]}
                                </Col>
                            </Row>
                        );
                    })}
                </div>
                <br />
                components: <br />
                Filter 날짜선택 <br />
                &lt;FilterRangePicker form=&#123;form&#125; /&gt;
                <br /> props
                <br />
                - form: form 전달 *필수
                <br />
                - dateRangeOptions : 다른 날짜 옵션을 사용하고 싶다면 변경 옵션 *필수아님
                <br />
                - defaultRange: 초기 설정 값 안넣으면 기본 0 으로 오늘 날짜로 셋팅 *필수아님
                <br />* searchDateType 은 작업마다 다른 부분이 많아 오직 날짜만 넣었습니다
                <Form form={form}>
                    <Row className="content__contentbox__table">
                        <Col className="label" span={4}>
                            기간
                        </Col>
                        <Col className="data" span={20}>
                            <Row align="middle" justify="start">
                                <FilterRangePicker form={form} />
                            </Row>
                        </Col>
                    </Row>
                </Form>
                <br></br>
                파일 업로드
                <br />
                &lt;CustomUpload uploadFiles=&#123;uploadFiles&#125; setUploadFiles=&#123;setUploadFiles&#125; /&gt;
                <br />
                필수 props
                <br />
                uploadFiles // 업로드 파일 Sate
                <br />
                setUploadFiles // 업로드 파일 setState
                <br />
                선택 props
                <br />
                layout // 'horizontal' | 'inline' | 'preview' 선택 preview 는 이미지 미리보기 <br />
                maxCount // 최대 파일 갯수 <br />
                maxSize // 최대크기 MB <br />
                disable // disable 여부 <br />
                imageSize // preview 시 이미지 표기 크기
                <Row className="content__contentbox__table">
                    <Col className="label" span={4}>
                        첨부
                    </Col>
                    <Col className="data" span={20}>
                        <Row align="middle" justify="start">
                            <CustomUpload uploadFiles={uploadFiles} setUploadFiles={setUploadFiles} />
                        </Row>
                    </Col>
                </Row>
                <br></br>
                파일 다운로드
                <br />
                &lt;CustomDownload downloadFiles=&#123;downloadFiles&#125; setDownloadFiles=&#123;setDownloadFiles&#125;
                /&gt;
                <br />
                필수 props
                <br />
                downloadFiles // 다운로드 파일 Sate
                <br />
                setDownloadFiles // 다운로드 파일 setState
                <br />
                선택 props
                <br />
                readOnly // 파일제거 안하고 보여주기만 할시
                <Row className="content__contentbox__table">
                    <Col className="label" span={4}>
                        첨부
                    </Col>
                    <Col className="data" span={20}>
                        <Row align="middle" justify="start">
                            <CustomDownload downloadFiles={downloadFiles} setDownloadFiles={setDownloadFiles} />
                        </Row>
                    </Col>
                </Row>
                <br></br>
                DnD Tree
                <br />
                &lt;CustomDndTree data=&#123;data&#125; setData=&#123;setData&#125; /&gt; <br />
                필수 props
                <br />
                data // Tree 구조 Sate
                <br />
                setData // Tree 구조 setState
                <br />
                선택 props
                <br />
                height // Tree Box 높이 <br />
                width // Tree Box 넓이 <br />
                참고 https://github.com/frontend-collective/react-sortable-tree#usage
                <br />
                {/* <CustomDndTree data={treeData} setData={onChangeTreeData} /> */}
                <br></br>
                Tree
                <br />
                &lt;Tree checkable treeData=&#123;treeData&#125; onCheck=&#123;onCheck&#125; /&gt; <br />
                필수 props
                <br />
                treeData // Tree 구조 Sate
                <br />
                setData // Tree 구조 setState
                <br />
                선택 props
                <br />
                checkable // 체크박스 활성화 <br />
                onCheck // 체크변경시 함수 <br />
                <div style={{ width: 400 }}>
                    <Tree checkable treeData={treeData} onCheck={onCheck} />
                </div>
            </section>
        </>
    );
};

export default SampleContainer;
