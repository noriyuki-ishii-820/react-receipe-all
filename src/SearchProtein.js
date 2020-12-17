import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SearchProtein = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const proteins = ["Beef", "Pork", "Chicken", "Tofu", "Prawn", "Lamb", "Salmon"]
  
  proteins.sort(function(a,b) {
      return a.localeCompare(b);
  })

  function handleClick (){
      var proteinChoice = this.value;
      if (document.getElementById("text-input").value === ""){
      document.getElementById("text-input").value = proteinChoice;
      } else {
        document.getElementById("text-input").value += " " + proteinChoice;
      }
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        By Popular Source of Protein
        </DropdownToggle>
      <DropdownMenu>
        {proteins.map(function(protein) {
            return <DropdownItem 
            value={protein}
            onClick = {handleClick} 
            >{protein}</DropdownItem>
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

export default SearchProtein;