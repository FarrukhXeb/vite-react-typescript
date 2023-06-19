import ListItem, { Item } from './ListItem';

interface ListProps {
  data: Item[];
}

function List({ data }: ListProps) {
  return (
    <ul>
      {data.map((item) => (
        <ListItem key={item.id} item={item} level={0} />
      ))}
    </ul>
  );
}

export default List;
