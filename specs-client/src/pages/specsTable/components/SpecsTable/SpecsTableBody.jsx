import React from 'react';
import TableBody from '@mui/material/TableBody';
import SpecsTableRow from './SpecsTableRow';
import { getStatusOptions } from '../../../../utils/services/specs';

let options = null;
function SpecsTableBody({ list, select, page, onDelete, amount }) {
  React.useMemo(async () => (options = await getStatusOptions()), []);

  return (
    <TableBody>
      {options &&
        list.map((spec, index) => (
          <SpecsTableRow
            spec={spec}
            key={page * amount + index}
            index={page * amount + index}
            select={select}
            onDelete={onDelete}
            statusOptions={options}
          />
        ))}
    </TableBody>
  );
}

export default SpecsTableBody;
