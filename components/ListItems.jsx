const ListItems = ({ list, headList }) => {
  return (
    <ul className="flex flex-col gap-2.5">
      <h1 className="font-light">{headList}</h1>
      {list.map((item) => (
        <li
          className="font-bold hover:underline duration-150 cursor-pointer"
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
