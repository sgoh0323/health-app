import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Ieditor } from './interface';

const Editor: React.FunctionComponent<Ieditor> = ({ value, onChange, height, readOnly }) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image'],
            [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
            ['clean']
        ]
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'align',
        'color',
        'background'
    ];

    return (
        <div style={{ height: `${height}px` }}>
            <ReactQuill
                style={{ height: `${readOnly ? height : height - 50}px` }}
                theme="snow"
                modules={readOnly ? { toolbar: '' } : modules}
                formats={formats}
                value={value || ''}
                onChange={(content, delta, source, editor) => {
                    if (onChange) onChange(editor.getHTML());
                }}
                readOnly={readOnly}
            />
        </div>
    );
};
export default Editor;
