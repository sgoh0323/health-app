/* disable-eslint */
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Breadcrumb, Form, Radio, Upload } from 'antd';
import { Editor, PostcodePopup } from 'components';
import modal from 'helper/customModal';
import { getOptionValue } from 'helper/recycle';
import { uniqueId } from 'lodash';
import React, { useRef, useState } from 'react';
import { targetsOptions } from 'types/Common/NoticesOptions';

const NoticeDetail = props => {
    const { boadrFiles, data, onClickDownLoad } = props;

    return (
        <Row className="content__contentbox__table">
            <Col className="label required" span={4}>
                대상
            </Col>
            <Col className="data" span={20}>
                <Row justify="start">{getOptionValue(targetsOptions, data.noticeTarget)}</Row>
            </Col>
            <Col className="label" span={4}>
                확인여부
            </Col>
            <Col className="data" span={8}>
                {data.isTopFix === 1 ? '필수' : '필수아님'}
            </Col>
            <Col className="label" span={4}>
                상단고정 여부
            </Col>
            <Col className="data" span={8}>
                {data.isTopFix === 1 ? '고정' : '고정안함'}
            </Col>
            <Col className="label" span={4}>
                상단노출 여부
            </Col>
            <Col className="data" span={20}>
                {data.isTopFix === 1 ? '노출' : '노출안함'}
            </Col>
            <Col className="label required" span={4}>
                제목
            </Col>
            <Col className="data" span={20}>
                {data.title}
            </Col>
            <Col className="label required" span={4}>
                내용
            </Col>
            <Col className="data" span={20}>
                <Editor value={data.content} height={350} readOnly />
            </Col>
            <Col className="label" span={4}>
                첨부
            </Col>
            <Col className="data" span={20}>
                {boadrFiles &&
                    boadrFiles.map(item => {
                        return (
                            <Button
                                icon={<DownloadOutlined />}
                                key={uniqueId()}
                                onClick={() => {
                                    onClickDownLoad(item);
                                }}>
                                {item.fileName}
                            </Button>
                        );
                    })}
            </Col>
            <Col className="label" span={4}>
                등록자/일시
            </Col>
            <Col className="data" span={8}>
                {`${data.registerName} ${data.registDate}`}
            </Col>
            <Col className="label" span={4}>
                최종수정자/일시
            </Col>
            <Col className="data" span={8}>
                {`${data.updaterName} ${data.updateDate}`}
            </Col>
        </Row>
    );
};
export default NoticeDetail;
