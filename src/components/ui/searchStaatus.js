

const SearchStatus = ({users}) => {

    const numOfPerson =(num) => {
        if(num < 3) {
          return "Person"
        }
        return "People"
     }
    return (
        <h1><span className={"m-2 badge bg-" + (users.length === 0 ? "danger" : "primary")}>
      {
        users.length > 0 ? `${users.length} ${numOfPerson(users.length)} walking with you` : "Nobody walking with you"
      } 
      </span></h1>
    )
}

export default SearchStatus;

