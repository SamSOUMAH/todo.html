import { faSearch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




 const FilterList = () => {
    
    return (
        <div className="d-flex justify-content-center">    
       <input type="text" placeholder="Search..." className="form-control w-50 bg-warning "></input>
       <FontAwesomeIcon icon={faSearch} style={{height:'3rem', width:'2rem'}} className="border bg-warning " ></FontAwesomeIcon>
      
        </div>
    )
}

export default FilterList
