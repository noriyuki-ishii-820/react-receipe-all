import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SearchCountry = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const countries = ["Australian", "Chinese", "Japanese", "French", "American", "Italian", "English", "Vietnamese", "Thai", "Mexican", "Singaporean", "Korean", "German", "Russian"]
  
  countries.sort(function(a,b) {
      return a.localeCompare(b);
  })

  function handleClick (){
      var countryChoice = this.value;
      if (document.getElementById("text-input").value === ""){
        document.getElementById("text-input").value = countryChoice;
        } else {
          document.getElementById("text-input").value += " " + countryChoice;
        }
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        By Popular Countries
        </DropdownToggle>
      <DropdownMenu>
        {countries.map(function(country) {
            return <DropdownItem 
            value={country}
            onClick = {handleClick} 
            >{country}</DropdownItem>
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

export default SearchCountry;