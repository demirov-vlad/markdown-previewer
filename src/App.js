import './App.css';
import React, {useState} from 'react';
import {marked} from "marked";


const App = () => {
    const [markdown, setMarkdown] = useState('# Welcome to my React Markdown Previewer!\n' +
        '\n' +
        '## This is a sub-heading...\n' +
        '### And here\'s some other cool stuff:\n' +
        '\n' +
        'Heres some code, `<div></div>`, between 2 backticks.\n' +
        '\n' +
        '```\n' +
        '// this is multi-line code:\n' +
        '\n' +
        'function anotherExample(firstLine, lastLine) {\n' +
        '  if (firstLine == \'```\' && lastLine == \'```\') {\n' +
        '    return multiLineCode;\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        'You can also make text **bold**... whoa!\n' +
        'Or _italic_.\n' +
        'Or... wait for it... **_both!_**\n' +
        'And feel free to go crazy ~~crossing stuff out~~.\n' +
        '\n' +
        'There\'s also [links](https://www.freecodecamp.org), and\n' +
        '> Block Quotes!\n' +
        '\n' +
        'And if you want to get really crazy, even tables:\n' +
        '\n' +
        'Wild Header | Crazy Header | Another Header?\n' +
        '------------ | ------------- | -------------\n' +
        'Your content can | be here, and it | can be here....\n' +
        'And here. | Okay. | I think we get it.\n' +
        '\n' +
        '- And of course there are lists.\n' +
        '  - Some are bulleted.\n' +
        '     - With different indentation levels.\n' +
        '        - That look like this.\n' +
        '\n' +
        '\n' +
        '1. And there are numbered lists too.\n' +
        '1. Use just 1s if you want!\n');

    const handleMarkdownChange = (e) => {
        setMarkdown(e.target.value);
    };
    const renderMarkdown = (markdownText) => {
        const renderedMarkdown = marked.parse(markdownText, { breaks: true });
        return { __html: renderedMarkdown };
    };
    return (
        <div className="app">
            <div className="editorWrap">
                <div className="toolbar">Editor</div>
                <textarea id="editor" value={markdown} onChange={handleMarkdownChange}/>
            </div>
            <div className="previewWrap">
                <div className="toolbar">Previewer</div>
                <div id="preview" dangerouslySetInnerHTML={renderMarkdown(markdown)}/>
            </div>
        </div>
    );
};

export default App;