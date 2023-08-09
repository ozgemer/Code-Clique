// Style

import AddTaskBtn from '../../../Task/Buttons/Task.Button.AddTask/Task.Button.AddTask';
import { ColorCircle, Content, Counter, Section, Title } from './Column.Styled';

function Column({ section, children }) {
  return (
    <Section>
      <Title>
        <ColorCircle backgroundcolor={section.color} />
        {section.title}
        <Counter>{section.tasks.length}</Counter>
      </Title>
      <Content>
        {children}
        <AddTaskBtn title={section.title} />
      </Content>
    </Section>
  );
}

export default Column;
