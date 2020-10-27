import React from "react";
import { List, ListItem, ListText } from "./styles/homeStyles";
import { CircleIcon } from "./styles/cardStyles";
import Leaf from "../assets/SVG/leafs6";
import KayakRed from "../assets/SVG/kayakRed";
import TripIcon from "../assets/SVG/trip";
import FoodIcon from "../assets/SVG/food";
import InsuranceIcon from "../assets/SVG/insurance";
import HealthIcon from "../assets/SVG/health";
import TeacherIcon from "../assets/SVG/teacher";
import HotelIcon from "../assets/SVG/hotel";
import GroupLeafsIcon from "../assets/SVG/leaf4";
import Leafs5 from "../assets/SVG/leafs5";

const infoListItems = [
  {
    id: 0, 
    title: "opiekę wykwalifikowanej kadry pedagogicznej",
    title1: "z 15 letnim doświadczeniem",
    icon: <TeacherIcon />,
  },
  {
    id: 1,
    title: "opiekę medyczną",
    icon: <HealthIcon />,
  },
  {
    id: 2,
    title: "ubezpieczenie NNW",
    icon: <InsuranceIcon />,
  },
  {
    id: 3,
    title: "wyżywnienie",
    icon: <FoodIcon />,
  },
  {
    id: 4,
    title: "wycieczki krajoznawczo-turystyczne",
    icon: <TripIcon />,
  },
];


const InfoList = ({ kayakIcons = false }) => {
  return (
      kayakIcons ? (
        <List kayaks>
          <Leaf
            style={{
                top: "-16%",
                right: "15%",
                transform: "rotate(105deg)",
            }}
          />
          <KayakRed />    
          {infoListItems.map((item, i) => (
            <ListItem mountain key={i}>
              <CircleIcon mountain>
                {item.icon}
              </CircleIcon>
              <ListText mountain>
                {item.title}<br/>{item.title1}
              </ListText>
            </ListItem>
          ))}
        </List>  
          ) : (
        <List mountain>                 
          {infoListItems.map((item, i) => (
            <ListItem mountain key={i}>
              <CircleIcon mountain>
                {item.icon}
              </CircleIcon>
              <ListText mountain>
                {item.title}<br/>{item.title1}
              </ListText>
            </ListItem>
          ))}
          <ListItem mountain>
            <CircleIcon mountain>
              <HotelIcon />
            </CircleIcon>
            <ListText mountain>nocleg</ListText>
          </ListItem>
          <Leafs5 />
          <GroupLeafsIcon /> 
        </List>  
      )
    )
}

export default InfoList;