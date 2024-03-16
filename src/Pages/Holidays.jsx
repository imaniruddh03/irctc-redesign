import React from 'react'
import Maharaja from '../assets/maharaja.jpg'

const Holidays = () => {

  const Destination = [{
    id: 1,
    title: "Maharaja Express",
    description:"Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World's Leading Luxury train” by World Travel Awards consecutively for last six years.",
    profile:"https://blog.the-maharajas.com/wp-content/uploads/2021/07/Indian-Luxury-Train-825x510.jpg"
  },
  {
    id: 2,
    title: "International Packages",
    description:"Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.",
    profile:"https://static.toiimg.com/photo/msid-87137761,width-96,height-65.cms"  },
  {
    id: 3,
    title: "Domestic Air Packages",
    description:"Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!",
    profile:"https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg"
  },
  {
    id: 4,
    title: "Bharat Gaurav Tourist Train ",
    description:"IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India's rich cultural heritage.",
    profile:"https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202206/bharat_gaurav_train_ac.jpeg"
  },
  {
    id: 5,
    title: "Rail Tour Packages",
    description:"IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available..",
    profile:"https://4.bp.blogspot.com/-XtrmP7Gbpec/VeqbVyLT6TI/AAAAAAAAIoE/plxqkTPV8po/s640/Darjeeling-Himalaya-railway.jpg"
  },
  

  



] 







  return (
    <div  className='w-full h-fit bg-black  flex items-center  flex-col  '>
        <h1 className=' text-white text-[7vw] font-semibold '>Plan Your Next Holidays</h1>

        <div className='flex w-full flex-wrap  px-20  py-5 gap-2 items-center justify-center  '>
            {Destination.map((items , index)=>{
              return(
                <div key={index} className="box1 bg-[#181A1C] w-[30%]  flex items-center justify-evenly    px-5 py-5 rounded-2xl ">
                <div className=' flex flex-col gap-2 text-center items-center text-white'>
                    <img src={items.profile} alt="" className=' w-full  rounded-2xl h-[15vw] ' />
                    <h1 className='text-[1.75vw] h-[3vw]'>{items.title}</h1>
                    <p className=' text-[15px] px-5  text-justify h-[12vw]  '>{items.description}</p>
                    <button className=' bg-sky-600 w-1/2 px-2 py-2 rounded-full '>Read More</button>
                </div>
            </div>
              )
            })}


            
        </div>
      
    </div >
  )
}

export default Holidays
