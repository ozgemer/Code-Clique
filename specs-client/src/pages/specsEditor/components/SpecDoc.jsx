import React, { useRef, useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import SpecToaster from './SpecToaster';
import { SpecDocContainer } from '../SpecEditor.styled';
import { EditorStyle } from '../../../utils/configs/EditorJS.styled';
import { tools } from '../../../utils/configs/EditorJS.config';
import { getSpecAt, updateSpecAt } from '../../../utils/services/specs';

function SpecDoc({
  _id,
  editState,
  resetEditState,
  saveState,
  resetSaveState,
}) {
  const editor = useRef(null);
  const refreshEditor = useRef(true);
  const userSession = JSON.parse(localStorage.getItem('userInfo'));
  const [toaster, setToaster] = useState(null);
  const resetToasterState = () => setToaster(null);

  useEffect(() => {
    if (refreshEditor.current) {
      refreshEditor.current = false;
      createDoc();
      return;
    }
    if (editState === null) return;
    toggleEdit();
    checkSaveState();
  }, [editState]);

  function createDoc() {
    editor.current = new EditorJS({
      placeholder: !editState && 'Let`s write an awesome spec!',
      logLevel: 'ERROR',
      minHeight: 250,
      tools: tools,
      readOnly: true,
      onReady: () => fetchSpecData(),
    });
  }

  async function fetchSpecData() {
    await getSpecAt(_id).then((data) => editor.current.render(data.doc));
  }

  async function checkSaveState() {
    if (saveState == null) return;
    if (!saveState) {
      destroyDoc();
      refreshEditor.current = true;
      setToaster({
        message: 'discarding changes...',
        severity: 'warning',
      });
    } else {
      SaveDoc();
      setToaster({
        message: 'saving changes...',
        severity: 'success',
      });
    }
    resetSaveState();
    resetEditState();
  }

  const toggleEdit = async () =>
    await editor.current.isReady.then(
      async () => await editor?.current.readOnly.toggle()
    );

  async function SaveDoc() {
    await editor.current
      .save()
      .then((outputData) => updateSpecAt(outputData, _id, userSession?._id));
  }

  const destroyDoc = async () =>
    await editor.current.isReady.then(
      async () => await editor.current.destroy()
    );

  return (
    <>
      <EditorStyle />
      <SpecDocContainer>
        <div id='editorjs' data-testid='editorjs' />
      </SpecDocContainer>
      {toaster !== null && (
        <SpecToaster
          resetToasterState={resetToasterState}
          message={toaster?.message}
          severity={toaster?.severity}
        />
      )}
    </>
  );
}

export default SpecDoc;
