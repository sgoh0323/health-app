// import { useCallback, useEffect, useState } from 'react';
// import { get, post, put } from 'api/membership/membershipApi';
// import { useForm } from 'antd/lib/form/Form';
// import modal from 'helper/customModal';
// import { formatDate, mapDatesToRange } from 'helper/recycle';
// import { useHistory } from 'react-router-dom';
// import { AttachFile } from 'types/Common/ApiModels';
// import { MembershipDetail } from '../pages/Membership/interface';
// import { ignoringKeys, initialDetailValues } from '../pages/Membership/options';

export const useMembershipDetail = (idx: string) => {
    // const history = useHistory();
    // const [item, setItem] = useState<MembershipDetail>({ ...initialDetailValues });
    // const [form] = useForm<MembershipDetail>();
    // const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    // const [files, setFiles] = useState<AttachFile[]>([]);
    // const api = useCallback(params => (idx ? put(params) : post(params)), [idx]);

    // useEffect(() => {
    //     if (idx)
    //         get({ idx })
    //             .then(mapDatesToRange(['grantStartDateFormat', 'grantEndDateFormat'], 'grantDateRange'))
    //             .then(setItem);
    // }, [idx]);

    // useEffect(() => {
    //     form.setFieldsValue(item);
    // }, [item]);

    // const save = async () => {
    //     try {
    //         const value = await form.validateFields();
    //         modal.msg('101', '', async () => {
    //             const formData = new FormData();
    //             const data = { ...value, name: value.name$, files: uploadedFiles };

    //             if (data.grantDateRange?.length === 2) {
    //                 data.grantStartDate = formatDate(data.grantDateRange[0]);
    //                 data.grantEndDate = formatDate(data.grantDateRange[1]);
    //             }

    //             Object.keys(data).forEach(key => {
    //                 if (ignoringKeys.includes(key)) return;
    //                 if (data[key] !== undefined) {
    //                     formData.append(key, data[key]);
    //                     console.log('append form', key, data[key]);
    //                 }
    //             });

    //             if (uploadedFiles.length > 0) {
    //                 uploadedFiles.forEach(file => {
    //                     formData.append('files', file);
    //                 });
    //             } else {
    //                 formData.delete('files');
    //             }

    //             const response = await api({ data: formData });

    //             if (response?.message.includes('성공')) {
    //                 modal.info('저장 되었습니다.');
    //                 history.goBack();
    //             }
    //         });
    //     } catch (errorInfo) {
    //         console.log('submit error', errorInfo);
    //     }
    // };
    // return { item, save, form, uploadedFiles, setUploadedFiles };
};
