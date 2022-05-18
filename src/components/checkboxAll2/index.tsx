import React, { useEffect, useMemo, useState } from 'react';
import { Checkbox, Form, Row } from 'antd';
import _ from 'lodash';

const CheckboxAll = props => {
    const { options, formName, form, defaultValue, require, label, searchMode } = props;
    const [checkedList, setCheckedList] = useState(defaultValue.map(i => i.value));
    const [allCheck, setAllCheck] = useState(true);
    const [indeterminate, setIndeterminate] = useState(true);

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? options.map(i => i.value) : options.map(i => ''));
        setIndeterminate(false);
        // setCheckAll(e.target.checked);
        setAllCheck(e.target.checked);
        form.setFieldsValue(e.target.checked ? { [formName]: options.map(i => i.value) } : { [formName]: '' });
    };

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < options.length);
        setAllCheck(list.length === options.length);
        form.setFieldsValue({ [formName]: list });
    };

    return useMemo(
        () => (
            <>
                <Checkbox
                    // indeterminate={indeterminate}
                    checked={allCheck}
                    onChange={onCheckAllChange}>
                    전체
                </Checkbox>
                <Checkbox.Group onChange={onChange} options={options} value={checkedList} />
                <Form.Item
                    name={formName}
                    label=""
                    style={{ marginTop: '-30px' }}
                    rules={[{ required: require, message: `${label ? `${label}을(를) ` : ''} 선택해 주세요.` }]}
                />
            </>
        ),
        [form, defaultValue, checkedList, allCheck]
    );
};

export default CheckboxAll;
