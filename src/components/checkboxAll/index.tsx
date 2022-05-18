import React, { useEffect, useMemo, useState } from 'react';
import { Checkbox, Form, Input, Row, Select } from 'antd';
import _ from 'lodash';

const CheckboxAll = props => {
    const { options, form, formName, defaultValue, setDefaultValue, require, label, searchMode } = props;
    const [checkedList, setCheckedList] = useState([]);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = list => {
        // setData(list);
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < options.length);
        setCheckAll(list.length === options.length);
        form.setFieldsValue({ [formName]: list });
        if (setDefaultValue) {
            setDefaultValue(list);
        }
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? options.map(i => i.value) : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
        form.setFieldsValue({ [formName]: e.target.checked ? options.map(i => i.value) : [] });
        if (setDefaultValue) {
            setDefaultValue(e.target.checked ? options.map(i => i.value) : []);
        }
    };

    useEffect(() => {
        if (options && defaultValue) {
            if (defaultValue.length >= options.length) {
                setIndeterminate(false);
                setCheckAll(true);
                setCheckedList(defaultValue);
            } else {
                setCheckAll(false);
                setCheckedList(defaultValue);
                // setData(data);
            }
            form.setFieldsValue({ [formName]: defaultValue });
        }
        if (!defaultValue) {
            setIndeterminate(false);
            setCheckAll(true);
            setCheckedList(options.map(i => i.value));
            form.setFieldsValue({ [formName]: options.map(i => i.value) });
        }
        return () => {
            setCheckAll(true);
        };
    }, [defaultValue, options]);

    return useMemo(
        () => (
            <>
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                    전체
                </Checkbox>
                <Checkbox.Group options={options} value={checkedList} onChange={onChange} />
                <Form.Item
                    name={formName}
                    label=""
                    style={{ marginTop: '-30px' }}
                    rules={[{ required: require, message: `${label ? `${label}을(를) ` : ''} 선택해 주세요.` }]}
                />
            </>
        ),
        [defaultValue, checkedList, options]
    );
};

export default CheckboxAll;
