/* eslint-disable */
import { Col, Form, Input } from 'antd';
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

interface IColorPicker {
    color?: any;
    setColor?: (e) => void;
    form?: any;
    hexName?: string;
    rgbName?: string;
}
const ColorPicker: React.FunctionComponent<IColorPicker> = ({
    color = { rgb: '000' },
    setColor = e => {},
    hexName,
    rgbName,
    form
}) => {
    // const [color, setColor] = useState<any>();
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };

    const handleChange = (color, a, b, c) => {
        setColor(color);
    };

    const hexToRGB = val => {
        const hex = val.replaceAll('#', '');

        var aRgbHex = hex.match(/.{1,2}/g);
        var aRgb = [parseInt(aRgbHex[0], 16), parseInt(aRgbHex[1], 16), parseInt(aRgbHex[2], 16)];
        return aRgb.toString();
    };
    const onChangeColor = e => {
        if (form) {
            form.setFieldsValue({ [rgbName]: hexToRGB(e) });
        }
    };
    return (
        <>
            {hexName && (
                <>
                    <Col>HEX</Col>
                    <Col style={{ marginLeft: '5px', marginRight: '5px' }} onClick={handleClick}>
                        <Form.Item name="couponBgHexcode" initialValue={color} label="" style={{ width: '200px' }}>
                            <Input onChange={onChangeColor} />
                        </Form.Item>
                    </Col>
                </>
            )}
            {rgbName && (
                <>
                    <Col>RGB</Col>
                    <Col style={{ marginLeft: '5px', marginRight: '5px' }}>
                        <Form.Item
                            name="couponBgRgbcode"
                            initialValue={hexToRGB(color)}
                            label=""
                            style={{ width: '200px' }}>
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                </>
            )}
            {hexName || (rgbName && <Col>COLOR</Col>)}
            <Col style={{ marginLeft: '5px', marginRight: '5px' }}>
                <div
                    style={{
                        padding: '5px',
                        background: 'rgb(255, 255, 255)',
                        borderRadius: '1px',
                        boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 0px 1px',
                        // display: 'inline-block',
                        border: '1px solid #d9d9d9',
                        cursor: 'pointer',
                        width: '48px'
                    }}
                    onClick={handleClick}>
                    <div
                        style={{
                            width: '36px',
                            height: '20px',
                            borderRadius: '2px',
                            background: `${color ? color.hex : 'blue'}`
                        }}
                    />
                </div>
            </Col>
            {displayColorPicker ? (
                <div style={{ position: 'absolute', zIndex: '900', top: '-229px', left: '48px' }}>
                    <div
                        style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
                        onClick={handleClose}
                    />
                    <SketchPicker color={color} onChange={handleChange} disableAlpha />
                </div>
            ) : null}
        </>
    );
};

export default ColorPicker;
