import { useState } from 'react';
import Button from '@/components/Button';

interface ListItemProps {
  item: Item;
  level: number;
}
function ListItem({ item, level }: ListItemProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  if (!item.children) {
    return <li>{item.title}</li>;
  }
  const listItemStyle = {
    paddingLeft: `${level * 20}px`, // Adjust the indentation level
  };
  return (
    <li style={listItemStyle}>
      <Button
        label={expanded ? '-' : '+'}
        onClick={toggleExpand}
        className="bg-transparent text-black p-0!"
      />
      {item.title}
      {expanded && (
        <ul>
          {item.children.map((childItem) => (
            <ListItem key={childItem.id} item={childItem} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default ListItem;
