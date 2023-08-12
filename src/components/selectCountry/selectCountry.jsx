import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import styles from './select.module.css'

export default function SelectCountry(props) {
//   const [selectedKeys, setSelectedKeys] = React.useState(new Set(["台灣(+866)"]));
  const {country, setCountry} = props

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button     
          variant="bordered" 
          className={styles.btn}
          size="lg"
        >
        <div className={styles.local}>國家/地區</div>
        <div className={styles.country}> 
          {country}
        </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        variant="bordered"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={country}
        onSelectionChange={setCountry}
      >
        <DropdownItem key="台灣(+886)">台灣(+886)</DropdownItem>
        <DropdownItem key="美國(+1)">美國(+1)</DropdownItem>
        <DropdownItem key="日本(+81)">日本(+81)</DropdownItem>
        <DropdownItem key="韓國(+82)">韓國(+82)</DropdownItem>
        <DropdownItem key="澳洲(+61)">澳洲(+61)</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
