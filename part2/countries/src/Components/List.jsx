const List = ({ list }) => {
  if (!list) return null;
  return (
    <div>
      {list.map((l) => {
        return <div key={l.name.common}>{l.name.common}</div>;
      })}
    </div>
  );
};

export default List;
