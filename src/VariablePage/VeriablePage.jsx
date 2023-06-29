import FuncPage1 from "./FunctionPage";

const VeriablePage = () => {
  /*  const user =
    {
        name: "MrYed",
        age:29
    }
    const extendedUser =
    {
        isAdmin: true,
        ...user
    }
    console.log(extendedUser);
    const point = prompt('Write Your Age');

    //If Example
    if(point<18)
    {
        console.log("You are too young...");
    }
    else if (point>65)
    {
        console.log("You are old...");
    }
    else
    {
        console.log("Invalid value...");
    }*/

    //For Example
    const Teams = ["GS","FB","BJK","TS"]

    //Add Array
    Teams.push("KS");
    for (const team of Teams)
    {
        console.log(team);
    }
    const DateExample = new Date(2023,6,29);
    const SpecialDay = DateExample.toLocaleString('tr-TR',{day: '2-digit'});
    const SpecialMonth = DateExample.toLocaleString('tr-TR',{month:'long'});
    const SpecialYear = DateExample.getFullYear();
    return (<div style={{ backgroundColor: 'white', padding: '10px' }}><FuncPage1 name="Yunus Emre" lastname="Demirel" random={Math.random()}></FuncPage1>
    <div style={{display:'flex'}}>
    <div>{SpecialDay} - </div>
    <div>{SpecialMonth} - </div>
    <div>{SpecialYear}</div>
    </div>
    </div>)
}
export default VeriablePage;