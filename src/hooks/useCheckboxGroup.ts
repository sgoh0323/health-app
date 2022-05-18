import { FormInstance } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useState } from 'react';

export default function useCheckboxGroup(searchForm: FormInstance<any>, fieldName: string) {
    const [isLastCheckedAll, setIsLastCheckedAll] = useState(true);
    const [lastCheckedItem, setLastValue] = useState(true);
    const onChangeCheckboxGroup = (checkedItems: CheckboxValueType[]) => {
        let newValues = [];
        if (isLastCheckedAll) {
            if (checkedItems.length === 2) {
                if (checkedItems.includes(999)) newValues = checkedItems.filter(x => x !== 999);
                else newValues = [999, 0, 1];
            }
        } else if (checkedItems.includes(999)) {
            newValues = [999, true, false];
        } else if (checkedItems.length === 0) {
            newValues = [!lastCheckedItem];
        } else if (checkedItems.length === 2) {
            if (checkedItems.includes(999)) newValues = checkedItems.filter(x => x !== 999);
            else newValues = [999, 0, 1];
        } else {
            newValues = checkedItems;
        }

        searchForm.setFieldsValue({
            [fieldName]: newValues
        });

        setIsLastCheckedAll(newValues.includes(999));
        setLastValue(newValues[newValues.length - 1]);
    };

    return {
        onChangeCheckboxGroup
    };
}

export function useCheckboxGroupWithNumbers(searchForm: FormInstance<any>, fieldName: string) {
    const [isLastCheckedAll, setIsLastCheckedAll] = useState(true);
    const [lastCheckedItem, setLastValue] = useState(0);
    const onChangeCheckboxGroup = (checkedItems: CheckboxValueType[]) => {
        let newValues = [];
        if (isLastCheckedAll) {
            if (checkedItems.length === 2) {
                if (checkedItems.includes(0)) newValues = checkedItems.filter(x => x !== 0);
                else newValues = [0, 1, 2];
            }
        } else if (checkedItems.includes(0)) {
            newValues = [0, 1, 2];
        } else if (checkedItems.length === 0) {
            newValues = [lastCheckedItem === 1 ? 2 : 1];
        } else if (checkedItems.length === 2) {
            if (checkedItems.includes(0)) newValues = checkedItems.filter(x => x !== 0);
            else newValues = [0, 1, 2];
        } else {
            newValues = checkedItems;
        }

        searchForm.setFieldsValue({
            [fieldName]: newValues
        });

        setIsLastCheckedAll(newValues.includes(0));
        setLastValue(newValues[newValues.length - 1]);
    };

    return {
        onChangeCheckboxGroup
    };
}
