import { useContext } from 'react';
import TasksContext from '../../../../context/TasksContext';
import { ChipStyled, Container } from '../../Task.Common.Styled';
import { TagsContainer } from './Task.Tags.Styled';

function Tags({ tags, taskId }) {
  const { deleteTag } = useContext(TasksContext);

  return (
    <TagsContainer>
      {tags.map((tag, index) => (
        <ChipStyled
          label={tag.title}
          onDelete={() => deleteTag(taskId, tag)}
          size='small'
          background={tag.color}
          key={index + tag}
        />
      ))}
    </TagsContainer>
  );
}

export default Tags;
