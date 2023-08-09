import React, { useState } from 'react';
import SpecDoc from './components/SpecDoc';
import SpecPageControlBar from './components/SpecPageControlBar';
import { SpecPageContainer } from './SpecEditor.styled';

function SpecPage({ _id, unselect }) {
  const [readOnly, setReadOnly] = useState(null);
  const [saveDoc, setSaveDoc] = useState(null);
  const resetEditState = () => setReadOnly(null);
  const resetSaveState = () => setSaveDoc(null);

  return (
    <SpecPageContainer>
      <SpecPageControlBar
        unselect={unselect}
        changeEditMode={setReadOnly}
        setSave={setSaveDoc}
      />
      <SpecDoc
        _id={_id}
        editState={readOnly}
        resetEditState={resetEditState}
        saveState={saveDoc}
        resetSaveState={resetSaveState}
      />
    </SpecPageContainer>
  );
}

export default SpecPage;
