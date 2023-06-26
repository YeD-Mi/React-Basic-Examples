import './HomePage.css';
import OrangeButton from './orangebutton';

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
      <div className='HomeLeftScreen'>
      </div>
      <div className='HomeProfilImage'>
      <img className='ProfilImage' src={require('./img/profil.jpeg')} alt="Resim açıklaması" />
      </div>
      <div>
        <h1 className='YellowTitle'>I'M {User.name} -</h1>
        <h1 className='WhiteTitle'>{User.title}</h1>
        <p className='WhiteDescription'>{User.description}</p>
        <OrangeButton/>
        <div className='Test1'>
          <div className='Test2'></div>
          <div className='Test3'></div>
          <div className='Test4'></div>
        </div>
      </div>
    </div>
  )
}
export default HomePage;