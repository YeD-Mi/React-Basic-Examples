const TimeOutPage = () => {
    function TimeOut1()
    {
        console.log("Time Out - 1");
    }
    const TimeOut2 = () => {
        console.log("Time Out - 2");
    }
    setTimeout(TimeOut1,2000);
    setTimeout(TimeOut2,3000);
    setTimeout(() => {console.log("Finish");},4000);
}
export default TimeOutPage;