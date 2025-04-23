import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useEffect, useRef } from 'react';

const editorStyle: string[] = [
  'w-[8.5in]', 'min-h-[11in]', 'mx-auto', 'border', 'border-gray-300',
  'my-5'
];

const toolbarStyle: string[] = [
  'flex', 'flex-row', 'justify-center'
];

const TextEditor = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current)
      throw new ReferenceError('containerRef not found.');

    const editorDiv = document.createElement('div');
    containerRef.current.append(editorDiv);
    new Quill(editorDiv, { theme: 'snow' });

    // styles
    const editorArea = containerRef.current.querySelector('.ql-editor');
    editorArea?.classList.add(...editorStyle);
    const toolbar = containerRef.current.querySelector('.ql-toolbar');
    toolbar?.classList.add(...toolbarStyle);

    const container = containerRef.current;
    return () => { container.innerHTML = '' };
  }, []);

  return (
    <div id='container' ref={containerRef} />
  );
};

export default TextEditor;