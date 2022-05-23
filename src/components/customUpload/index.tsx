/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Upload, Button, Image } from 'antd';
import { UploadOutlined, PaperClipOutlined, DeleteOutlined } from '@ant-design/icons';
import modal from 'helper/customModal';
import { uniqueId } from 'lodash';

export type FormLayout = 'horizontal' | 'inline' | 'preview';

interface CustomUploadProps {
    uploadFiles: File[];
    setUploadFiles: (e) => void;
    layout?: FormLayout;
    maxCount?: number;
    maxSize?: number; // 최대크기 MB
    disable?: boolean;
    imgSize?: number; // Preview 이미지 크기
}

const CustomUpload: React.FunctionComponent<CustomUploadProps> = props => {
    const {
        uploadFiles,
        setUploadFiles,
        layout = 'inline',
        maxCount = 3,
        maxSize = 3,
        disable = false,
        imgSize = 100
    } = props;
    const [previewImgs, setPreviewImgs] = useState([]);

    const encodeFileToBase64 = fileBlob => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise(resolve => {
            reader.onload = () => {
                setPreviewImgs([...previewImgs, reader.result]);
                // resolve();
            };
        });
    };

    const beforeUpload = (file: File, fileList: File[]) => {
        // 차후 멀티 등록이 필요할경우 구현
        // if (uploadFiles.length + fileList.length > maxCount - 1) {
        //     modal.warn(`등록가능한 파일은 최대 ${maxCount - 1}개까지 입니다.`);
        //     return false;
        // }
        if (file.size / (1024 * 1024) > maxSize) {
            modal.msg('005');
            return false;
        }
        if (uploadFiles.length > maxCount - 1) {
            modal.warn(`등록가능한 파일은 최대 ${maxCount}개까지 입니다.`);
            return false;
        }
        setUploadFiles([...uploadFiles, ...fileList]);
        if (layout === 'preview') {
            encodeFileToBase64(file);
        }
        return false;
    };

    const onRemove = file => {
        const index = uploadFiles.indexOf(file);
        const newFileList = uploadFiles.slice();
        newFileList.splice(index, 1);
        setUploadFiles(newFileList);
        if (layout === 'preview') {
            const newimgList = previewImgs.slice();
            newimgList.splice(index, 1);
            setPreviewImgs(newimgList);
        }
    };
    useEffect(() => {
        return () => {
            //
        };
    }, [uploadFiles]);
    return (
        <div style={{ marginLeft: '0px' }} className={layout === 'inline' ? 'upload_item_inline' : ''}>
            <Upload
                beforeUpload={beforeUpload}
                onRemove={onRemove}
                maxCount={maxCount}
                accept="image/*,.pdf,.hwp,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                disabled={disable}
                multiple={false}
                showUploadList={false}>
                <Button style={{ width: '180px', marginLeft: '0px' }} icon={<UploadOutlined />}>
                    Click to upload
                </Button>
            </Upload>
            {uploadFiles && uploadFiles.length > 0 && (
                <div className="ant-upload-list ant-upload-list-text" style={{ marginLeft: '5px' }}>
                    {layout !== 'preview'
                        ? uploadFiles.map(item => {
                              return (
                                  <div
                                      className="ant-upload-list-text-container"
                                      key={uniqueId()}
                                      style={{ width: '180px' }}>
                                      <div className="ant-upload-list-item ant-upload-list-item-undefined ant-upload-list-item-list-type-text">
                                          <div className="ant-upload-list-item-info">
                                              <span className="ant-upload-span">
                                                  <div className="ant-upload-text-icon">
                                                      <span
                                                          role="img"
                                                          aria-label="paper-clip"
                                                          className="anticon anticon-paper-clip">
                                                          <svg
                                                              viewBox="64 64 896 896"
                                                              focusable="false"
                                                              data-icon="paper-clip"
                                                              width="1em"
                                                              height="1em"
                                                              fill="currentColor"
                                                              aria-hidden="true">
                                                              <path d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"></path>
                                                          </svg>
                                                      </span>
                                                  </div>
                                                  <span className="ant-upload-list-item-name" title={item.name}>
                                                      {item.name}
                                                  </span>
                                                  <span className="ant-upload-list-item-card-actions">
                                                      <button
                                                          title="파일 삭제"
                                                          type="button"
                                                          className="ant-btn ant-btn-text ant-btn-sm ant-btn-icon-only ant-upload-list-item-card-actions-btn"
                                                          onClick={() => {
                                                              onRemove(item);
                                                          }}>
                                                          <span
                                                              role="img"
                                                              aria-label="delete"
                                                              tabIndex={-1}
                                                              className="anticon anticon-delete">
                                                              <svg
                                                                  viewBox="64 64 896 896"
                                                                  focusable="false"
                                                                  data-icon="delete"
                                                                  width="1em"
                                                                  height="1em"
                                                                  fill="currentColor"
                                                                  aria-hidden="true">
                                                                  <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                                              </svg>
                                                          </span>
                                                      </button>
                                                  </span>
                                              </span>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                        : uploadFiles.map((item, index) => {
                              return (
                                  <div
                                      title={item.name}
                                      key={uniqueId()}
                                      style={{
                                          display: 'grid',
                                          border: '1px solid #e0e0e0',
                                          padding: '2px',
                                          marginTop: '5px',
                                          marginRight: '5px'
                                      }}>
                                      <div style={{ display: 'inline-flex' }}>
                                          <div
                                              style={{
                                                  width: `${imgSize - 20}px`,
                                                  overflow: 'hidden',
                                                  textOverflow: 'ellipsis'
                                              }}>
                                              {item.name}
                                          </div>
                                          <div
                                              style={{ width: `20px`, cursor: 'pointer' }}
                                              onClick={() => {
                                                  onRemove(item);
                                              }}>
                                              <DeleteOutlined size={20} />
                                          </div>
                                      </div>
                                      <Image width={imgSize} src={previewImgs[index]} />
                                  </div>
                              );
                          })}
                </div>
            )}
        </div>
    );
};

CustomUpload.defaultProps = {
    layout: 'inline',
    maxCount: 3,
    maxSize: 10,
    disable: false,
    imgSize: 100
};
export default CustomUpload;
