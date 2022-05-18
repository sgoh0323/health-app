import React, { useEffect, useState } from 'react';
import { Checkbox, Form, Row, TreeSelect } from 'antd';
import _ from 'lodash';

const CheckboxAll = props => {
    const { options, formName, form, defaultValue, require, label, searchMode } = props;
    const [viewList, setViewList] = useState([]);
    const [allCheck, setAllCheck] = useState(true);
    const onChangeAll = e => {
        if (e || !searchMode) {
            setAllCheck(e);
            if (e) {
                if (searchMode) {
                    form.setFieldsValue({ [formName]: [0] });
                } else {
                    form.setFieldsValue({ [formName]: options.map(i => i.value) });
                }
                setViewList([]);
            } else {
                form.setFieldsValue({ [formName]: [] });
                setViewList([]);
            }
        }
    };
    useEffect(() => {
        if (defaultValue && options) {
            if (_.isEqual(defaultValue, [0]) || options.length === defaultValue.length) {
                setAllCheck(true);
                if (searchMode) {
                    form.setFieldsValue({ [formName]: [0] });
                } else {
                    form.setFieldsValue({ [formName]: options.map(i => i.value) });
                }
            } else {
                form.setFieldsValue({ [formName]: defaultValue });
                setAllCheck(false);
                setViewList(defaultValue);
            }
        }
        return () => {
            // setViewList([]);
            // setAllCheck(true);
        };
    }, [defaultValue, options]);

    const [selectedValues, setSelectedValues] = useState([]);
    const x = Array.from({ length: 50 }, (_, i) => ({
        title: `Block ${i + 1}`,
        value: `${i + 1}`
    }));

    const allIds = x.map(({ value }) => value);

    return (
        <TreeSelect
            allowClear={true}
            placeholder="Select a block"
            treeCheckable={true}
            showCheckedStrategy={TreeSelect.SHOW_CHILD}
            style={{ width: '350px' }}
            dropdownStyle={{ maxHeight: '300px' }}
            onChange={ids => setSelectedValues(ids)}
            value={selectedValues}
            maxTagCount={2}
            maxTagPlaceholder={omittedValues => `+ ${omittedValues.length} Blocks ...`}
            treeData={[
                {
                    title:
                        selectedValues.length === x.length ? (
                            <span
                                onClick={() => setSelectedValues([])}
                                style={{
                                    display: 'inline-block',
                                    color: '#286FBE',
                                    cursor: 'pointer'
                                }}>
                                Unselect all
                            </span>
                        ) : (
                            <span
                                onClick={() => setSelectedValues(allIds)}
                                style={{
                                    display: 'inline-block',
                                    color: '#286FBE',
                                    cursor: 'pointer'
                                }}>
                                Select all
                            </span>
                        ),
                    value: 'xxx',
                    disableCheckbox: true,
                    disabled: true
                },
                ...x
            ]}
        />
    );
};

export default CheckboxAll;
