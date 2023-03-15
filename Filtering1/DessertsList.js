function DessertsList(props) {
  // Implement the component here.
  // props.sort((a, b) => a.timeM - b.timeM);
  
 
  // const listItems = data.filter(
  // (itemText) => itemText.calories < 500)
  // return <li>{itemText}</li>
  const filteredData = props.data
    .filter((dessert) => {
      return dessert.calories < 500
    })
    .sort((a, b) => {
      return a.calories - b.calories;
    })
    .map(dessert => {
      return (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });
  return <ul>{filteredData}</ul>;
}
  
// return (
//   < ul >
//     {listItems}
//   </ul>
// )


export default DessertsList;
