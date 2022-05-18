/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Upload, Button, Image, Row } from 'antd';
import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import modal from 'helper/customModal';
import { uniqueId } from 'lodash';
import useLoding from 'hooks/useLoding';
import { apiFileDownload } from 'api/common/commonApi';

export type FormLayout = 'horizontal' | 'inline' | 'preview';

interface CustomDownloadProps {
    downloadFiles: any[];
    setDownloadFiles?: (e) => void;
    readonly?: boolean;
}

const CustomDownload: React.FunctionComponent<CustomDownloadProps> = props => {
    const { downloadFiles, setDownloadFiles, readonly } = props;
    const { setLoading } = useLoding();
    const onRemove = file => {
        const index = downloadFiles.indexOf(file);
        const newFileList = downloadFiles.slice();
        newFileList.splice(index, 1);
        setDownloadFiles(newFileList);
    };
    useEffect(() => {
        return () => {
            //
        };
    }, [downloadFiles]);

    return (
        <div style={{ marginBottom: '5px' }}>
            {downloadFiles &&
                downloadFiles.length > 0 &&
                downloadFiles.map(item => {
                    return (
                        <Row
                            key={uniqueId()}
                            style={{
                                display: 'inline-flex',
                                border: '1px solid #e0e0e0',
                                padding: '4px 10px',
                                marginTop: '5px',
                                marginRight: '5px',
                                fontSize: '14px'
                            }}
                            align="middle"
                            title={item.fileName}>
                            <DownloadOutlined />
                            <div
                                style={{
                                    width: `119px`,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer',
                                    marginLeft: '5px'
                                }}
                                onClick={() => {
                                    setLoading(apiFileDownload({ idx: item.idx, fileName: item.fileName }));
                                }}>
                                {item.fileName}
                            </div>
                            {readonly === undefined && (
                                <div
                                    style={{ width: `20px`, cursor: 'pointer' }}
                                    onClick={() => {
                                        onRemove(item);
                                    }}>
                                    <DeleteOutlined size={20} />
                                </div>
                            )}
                        </Row>
                    );
                })}
        </div>
    );
};

export default CustomDownload;
