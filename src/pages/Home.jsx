import Hero from '../Components/Hero'
import Biography from '../Components/Biography'
import Departments from '../Components/Departments'
import MessageForm from '../Components/MessageForm'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero heroUrl={'/hero.png'}/>
      <Biography imageUrl={'/about.png'} />
      <Departments />
      <MessageForm/>
    </div>
  )
}

export default Home
