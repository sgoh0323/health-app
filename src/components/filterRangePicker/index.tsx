/* eslint-disable */
import React, { useState } from 'react';
import { Col, DatePicker, Form, FormInstance, Row, Select } from 'antd';
import moment from 'moment';
import { dateRangeOptions as defaultDateRangeOptions } from 'components/options/CommonOptions';

interface FilterRangePickerProps {
    form: FormInstance<any>; // form 전달
    dateRangeOptions?: []; // 다른 날짜 옵션을 사용하고 싶다면 변경옵션값
    defaultRange?: number; // 초기 설정 값
}

const FilterRangePicker: React.FunctionComponent<FilterRangePickerProps> = props => {
    const { form, defaultRange = 30, dateRangeOptions = defaultDateRangeOptions } = props;
    const [range, setRange] = useState(defaultRange);

    const onChangeDateRange = e => {
        setRange(e);
        if (e !== 999) {
            form.setFieldsValue({ startDate: moment().add(-e, 'days'), endDate: moment() });
        }
    };

    const onChange = () => {
        setRange(999);
    };

    return (
        <Row align="middle" justify="start">
            <Form.Item
                name="startDate"
                label=""
                initialValue={defaultRange !== 999 ? moment().add(-defaultRange, 'days') : moment()}
                style={{ width: '130px', marginLeft: '10px', marginRight: '10px' }}>
                <DatePicker onChange={onChange} />
            </Form.Item>
            <Col>~</Col>
            <Form.Item
                name="endDate"
                label=""
                initialValue={moment()}
                style={{ width: '130px', marginLeft: '10px', marginRight: '10px' }}>
                <DatePicker onChange={onChange} />
            </Form.Item>
            <Select
                options={dateRangeOptions}
                onChange={onChangeDateRange}
                value={range}
                style={{ width: '100px', marginLeft: '0px', marginRight: '10px' }}
            />
        </Row>
    );
};

export default FilterRangePicker;
