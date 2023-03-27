import "./styles.css";
import SimpleList from "./components/SimpleList";
import LengthList from "./components/LengthList"
import SortedList from "./components/SortedList"
import RegionList from "./components/RegionList";

export default function App() {
  const example1 = ["Aijan", "Bakyt", "Joldosh"];
  const example2 = ["Apple", "Banana", "StrawBerries"]
  const scores = [
    { name: 'Alice', score: 42 },
    { name: 'Bob', score: 17 },
    { name: 'Charlie', score: 87 },
  ];
  const regions = [
    { name: "Bishkek City", area: 160, population: 1098448 },
    { name: "Chui Province", area: 19800, population: 1016852 },
    { name: "Issyk-Kul Province", area: 42900, population: 470022 },
    { name: "Naryn Province", area: 45000, population: 245301 },
    { name: "Osh Province", area: 29000, population: 1020300 },
    { name: "Jalal-Abad Province", area: 33300, population: 974838 },
    { name: "Talas Province", area: 11600, population: 256904 },
    { name: "Batken Province", area: 1700, population: 511333 }
];

  return (
    <div className="App">
      <SimpleList items={example1} />
      <hr />
      <SimpleList items={example2} />
      <hr />
      <LengthList array={example2[0]} />
      <LengthList array={example2[1]} />
      <LengthList array={example2[2]} />
      <hr />
      <h1>Score List</h1>
      <SortedList scores={scores} />
      <RegionList regions={regions} />
    </div>
      
  );
}
