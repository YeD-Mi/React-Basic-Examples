
import TimeOutPage from '../TimeOutPage/TimeOutPage';
import VeriablePage from '../VariablePage/VeriablePage';
import OrangeButton from '../orangebutton';
import './HomePage.css'

const User = 
{
  name:"ERDEM SARAY",
  title:"React Developer",
  description: "I'm a passionate software engineer from Turkey. I every day slapped my friend Yunus.",
  age:29,
  getir()
  {
    console.log(this.age);
  }
}
const HomePage = () => {
  return (
    <div className='HomeScreen'>
      <TimeOutPage/>
      <div className='HomeLeftScreen'>
      </div>
      <div className='HomeProfilImage'>
      <img className='ProfilImage' src={require('../img/profil.jpeg')} alt="Resim açıklaması" />
      </div>
      <div>
        <h1 className='YellowTitle'>I'M {User.name} -</h1>
        <h1 className='WhiteTitle'>{User.title}</h1>
        <p className='WhiteDescription'>{User.description}</p>
        <OrangeButton/>
        <VeriablePage/>
      </div>
    </div>
  )
}
export default HomePage;