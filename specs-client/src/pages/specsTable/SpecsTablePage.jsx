import React, { useState } from 'react';
import SpecDeleteDialog from '../..//pages/specsTable/components/SpecsTable/SpecDeleteDialog';
import SpecControlBar from './components/SpecControlBar/SpecControlBar';
import SpecsTable from './components/SpecsTable/SpecsTable';
import { addSpec, removeSpecAt } from '../../utils/services/specs';
import {
  toggleDateOrder,
  groupByStatus,
} from '../../helpers/specFilterHelpers';

function SpecsTablePage({
  specList,
  setSpecList,
  setSelectedIndex,
  fetchSpecList,
}) {
  const userSession = JSON.parse(localStorage.getItem('userInfo'));
  const [deleteDialog, setDeleteDialog] = useState(false);

  const newSpec = async () => {
    const data = await addSpec(userSession?._id);
    setSpecList(data);
    chooseSpec(0);
  };

  const chooseSpec = (index) => setSelectedIndex(index);

  const deleteSpec = async (id) => {
    setSpecList([]);
    const data = await removeSpecAt(id);
    setSpecList(data);
  };

  const openDeleteDialog = (index) => setDeleteDialog(index);

  const setSearchResults = async (list) => {
    setSpecList([]);
    setSpecList(list);
  };

  const toggleDate = async () => {
    setSpecList([]);
    setSpecList(await toggleDateOrder(specList));
  };

  const toggleStatus = async () => {
    const current = specList;
    setSpecList([]);
    setSpecList(await groupByStatus(current));
  };

  return (
    <>
      <SpecControlBar
        createSpec={newSpec}
        resetSearch={fetchSpecList}
        setSearchResults={setSearchResults}
      />
      <SpecsTable
        specList={specList}
        select={chooseSpec}
        onDelete={openDeleteDialog}
        toggleDate={toggleDate}
        toggleStatus={toggleStatus}
        fetchSpecList={fetchSpecList}
      />
      {deleteDialog !== false && (
        <SpecDeleteDialog
          onDelete={deleteSpec}
          setDialogState={setDeleteDialog}
          _id={specList[deleteDialog]._id}
        />
      )}
    </>
  );
}

export default SpecsTablePage;
