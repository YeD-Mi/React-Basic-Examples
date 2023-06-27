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
}
export default VeriablePage;