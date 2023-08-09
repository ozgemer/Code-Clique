import React, { useState, useEffect } from 'react';
import SpecEditorPage from './pages/specsEditor/SpecsEditor';
import SpecsTablePage from './pages/specsTable/SpecsTablePage';
import { GlobalStyle, SpecsContentContainer } from './utils/configs/GlobalStyle';
import { getSpecList } from './utils/services/specs';

function SpecsContent() {
  const [specList, setSpecList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetchSpecList();
  }, []);

  const fetchSpecList = async () => {
    setSpecList([]);
    const data = await getSpecList();
    setSpecList(data);
  };

  const unselect = async () => {
    setSelectedIndex(null);
    await fetchSpecList();
  };

  return (
    <SpecsContentContainer>
      <GlobalStyle />
      {selectedIndex === null ? (
        <SpecsTablePage
          specList={specList}
          setSpecList={setSpecList}
          setSelectedIndex={setSelectedIndex}
          fetchSpecList={fetchSpecList}
        />
      ) : (
        <SpecEditorPage unselect={unselect} _id={specList[selectedIndex]._id} />
      )}
    </SpecsContentContainer>
  );
}

export default SpecsContent;
