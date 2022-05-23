import React, { useEffect, useState } from 'react';
import { Tag } from 'antd';
import _ from 'lodash';

const CustomTags = props => {
    const { data, setData, color = '#2db7f5', itemKey, labelName, tagkey = '', readOnly = false } = props;
    const [defaultData, setDefaultData] = useState(data);
    useEffect(() => {
        console.log(data);
        if (data) {
            setDefaultData(data);
        }
        //
    }, [data]);
    return (
        <>
            {defaultData &&
                defaultData.length > 0 &&
                defaultData.map(item => {
                    return (
                        <Tag
                            key={`tag_${tagkey}_${item[itemKey]}`}
                            closable={!readOnly}
                            color={color}
                            style={{ marginBottom: '3px' }}
                            onClose={e => {
                                setData(data.filter(i => i[itemKey] !== item[itemKey]));
                            }}>
                            {item[labelName]}
                        </Tag>
                    );
                })}
        </>
    );
};

export default CustomTags;
