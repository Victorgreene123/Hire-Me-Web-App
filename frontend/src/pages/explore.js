import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { FaArrowLeft, FaBookmark, FaCircle, FaEllipsisV, FaFacebook, FaGripLinesVertical, FaHeart, FaInstagram, FaSpinner, FaStar, FaWhatsapp } from "react-icons/fa";
import profile from '../Assets/profile.png'
import User from "../components/User";
import { Link } from "react-router-dom";
const Explore = () => {
    const jobs = [
       "Electrician", "Painter", "Car Mechanic", "Generator Repairer", "Plumber",
       "Hair Dresser", "Teacher", "Private tutor", "Barber", "Hair Stylists"
    ];

    const locations = [
        "Ikeja", "Ayobo", "Lagos Island", "Lanre", "Akowonjo", "Pipeline",
        "Lekki Phase 1", "Lekki Phase 2", "Ajao Estate", "Ejigbo"
    ];

    const [isJobSearchResults, setIsJobSearchResults] = useState(false);
    const [isLocationSearchResults, setIsLocationSearchResults] = useState(false);
    const [jobSearchResults, setJobSearchResults] = useState([]);
    const [jobQuery, setJobQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");
    const [locationSearchResults, setLocationSearchResults] = useState([]);
    const [isUserclicked , setisUserClicked] = useState(false)

    const jobSearchBoxRef = useRef(null);
    const locationSearchBoxRef = useRef(null);
    const [active,setActive] = useState('')
    // Select Job Function
    const selectJob = (item) => {
        setJobQuery(item); // Set the selected job in the input
        setIsJobSearchResults(false); // Hide search results after selection
    };
    const [openProfile , setopenProfile] = useState(false);

    const clickUser = (id) =>{
        setisUserClicked(true)
        setActive(id)
        setopenProfile(true)
    }
    const closeProfile = () =>{
        setopenProfile(false)
        
    }

    // Select Location Function
    const selectLocation = (item) => {
        setLocationQuery(item); // Set the selected location in the input
        setIsLocationSearchResults(false); // Hide search results after selection
    };

    // Job Search Handler
    const handleJobChange = (e) => {
        const query = e.target.value;
        setJobQuery(query);

        if (query.length === 0) {
            setJobSearchResults([]);
        } else {
            const results = jobs.filter((job) =>
                job.toLowerCase().includes(query.toLowerCase())
            );
            setJobSearchResults(results);
        }
    };

    // Location Search Handler
    const handleLocationChange = (e) => {
        const query = e.target.value;
        setLocationQuery(query);

        if (query.length === 0) {
            setLocationSearchResults([]);
        } else {
            const results = locations.filter((location) =>
                location.toLowerCase().includes(query.toLowerCase())
            );
            setLocationSearchResults(results);
        }
    };

    // Handle blur for job search input
    const handleJobBlur = (e) => {
        setTimeout(() => {
            if (jobSearchBoxRef.current && !jobSearchBoxRef.current.contains(e.relatedTarget)) {
                setIsJobSearchResults(false);
            }
        }, 1000); // Small delay to allow click event
    };

    // Handle blur for location search input
    const handleLocationBlur = (e) => {
        setTimeout(() => {
            if (locationSearchBoxRef.current && !locationSearchBoxRef.current.contains(e.relatedTarget)) {
                setIsLocationSearchResults(false);
            }
        }, 1000); // Small delay to allow click event
    };
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleOpen = (userId) => {
      if (openDropdown === userId) {
        setOpenDropdown(null); // Close the currently opened dropdown
      } else {
        setOpenDropdown(userId); // Open the clicked dropdown
      }
    };
    const [isSearchLoading , setisSearchLoading] = useState(false)
    const handleSearch = () => {
        setisSearchLoading(true);
        setTimeout(() => {
            setisSearchLoading(false);
        }, 2000);
    };
    
    // Example list of users
    const users = [
                {
                    userId:1,
                    name:"John Doe",
                    image : "profile1.jpg",
                    location:"Ikeja",
                    rating : "4.5",
                    bio:"I am a hardworking barber",
                    occupation:"Hair stylist",
                    whatsapp:"09030674788",
                                }, 
                {
                    userId:2,
                    name:"Daniel Adeboni",
                    image : "profile2.jpg",
                    location:"Ikeja",
                    rating : "-",
                    bio:"I am a hardworking barber",
                    occupation:"Hair stylist",
                    whatsapp:"09030674788",
                                }, 
                {
                    userId:3,
                name:"Lanre Ajakaye",
                image : "profile3.jpg",
                location:"Ikeja",
                rating : "3.7",
                bio:"I am a hardworking barber",
                occupation:"Hair stylist",
                whatsapp:"2348066245005",

                }, 
                {
                    userId:4,
                    name:"John Ubah",
                    image : "profile4.jpg",
                    location:"Ikeja",
                    rating : "4",
                    bio:"I am a hardworking barber",
                    occupation:"Hair stylist",
                    whatsapp:"09030674788",
                                }
            ];

    return (
        <>
        <div className={`${openProfile ? "hidden lg:block" : " "} relative`}>
            <Navbar />
            <div className=" bg-white w-full p-2">
                <div className="w-full py-6 border-b">
                    <div className="relative rounded-md lg:w-3/5 mx-auto lg:flex block w-[95%] items-center  border border-grey-600">
                        {/* Job Search */}
                        <div className="relative lg:w-1/2 w-full block" ref={jobSearchBoxRef}>
                            <div className="relative w-full items-center flex lg:border-b-0 border-b">
                                <i className="fa fa-search text-[1.3rem] text-gray-400 mr-1 absolute left-4"></i>
                                <input
                                    value={jobQuery}
                                    placeholder="Job title, keywords"
                                    onBlur={handleJobBlur}
                                    onFocus={() => setIsJobSearchResults(true)}
                                    className="w-full pl-14 py-4 pr-3 border-[#340352]  rounded-md focus:border-b-2 focus:border-b-[#340352]"
                                    onChange={(e) => handleJobChange(e)}
                                />
                            </div>
                            {isJobSearchResults && jobSearchResults.length > 0 && (
                                <div className="bg-white border-white h-auto max-h-64 overflow-y-auto block absolute z-10 w-full p-4">
                                    {jobSearchResults.map((item) => (
                                        <div
                                            className="w-full flex items-center p-3"
                                            onClick={() => selectJob(item)}
                                            key={item}
                                        >
                                            <i className="fa fa-search text-[1.3rem] text-gray-400 mr-2"></i>
                                            <p className="border-b w-full text-sm p-1">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <FaGripLinesVertical className="hidden lg:block" />

                        {/* Location Search */}
                        <div className="relative lg:w-1/2 w-full block" ref={locationSearchBoxRef}>
                            <div className="relative w-full items-center flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width={30} className="text-gray-400 absolute left-4">
                                    <path d="M10 2.002a5.683 5.683 0 00-5.687 5.687c0 3.603 4.06 8.656 5.32 10.137a.48.48 0 00.736 0c1.26-1.481 5.319-6.534 5.319-10.137A5.683 5.683 0 0010 2.002zm0 7.718a2.032 2.032 0 11.002-4.064A2.032 2.032 0 0110 9.72z" />
                                </svg>
                                <input
                                    value={locationQuery}
                                    placeholder="Location"
                                    onBlur={handleLocationBlur}
                                    onFocus={() => setIsLocationSearchResults(true)}
                                    className="lg:border-b-0  border-b    w-full pl-14 py-4 pr-3 border-[#340352] focus:border-b-2 focus:border-b-[#340352]"
                                    onChange={(e) => handleLocationChange(e)}
                                />
                            </div>
                            {isLocationSearchResults && locationSearchResults.length > 0 && (
                                <div className="bg-white border-white h-auto max-h-64 overflow-y-auto block absolute z-10 w-full p-4">
                                    {locationSearchResults.map((item) => (
                                        <div
                                            className="w-full flex items-center p-3"
                                            onClick={() => selectLocation(item)}
                                            key={item}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width={30} className="text-gray-400 mr-2">
                                                <path d="M10 2.002a5.683 5.683 0 00-5.687 5.687c0 3.603 4.06 8.656 5.32 10.137a.48.48 0 00.736 0c1.26-1.481 5.319-6.534 5.319-10.137A5.683 5.683 0 0010 2.002zm0 7.718a2.032 2.032 0 11.002-4.064A2.032 2.032 0 0110 9.72z" />
                                            </svg>
                                            <p className="border-b w-full text-sm p-1">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button  onClick={handleSearch}  className="text-white text-center mt-4 lg:mt-0 bg-[#340352] border lg:w-1/3 w-full mx-auto rounded-md py-3 flex justify-center items-center"> {isSearchLoading ? <FaSpinner className="spinner-icon text-center" /> : "Search"}</button>
                    </div>


                </div>

                <div className="flex lg:p-10 lg:px-14 mt-4 gap-2" >
                        <div className="w-[95%] lg:w-1/2 lg:overflow-y-auto lg:max-h-[80vh] mx-auto lg:mx-0">
                        {users.map((user) => (
        <User
          key={user.userId}
          userId={user.userId}
          isOpen={openDropdown === user.userId}
          isUserclicked = {isUserclicked}
          clickUser = {() => clickUser(user.userId)}
          toggleOpen={toggleOpen}
          image={user.image}
          name={user.name}
          occupation={user.occupation}
          location={user.location}
          rating={user.rating}
          bio={user.bio}
          whatsapp={user.whatsapp}
          active={active}
        />
      ))}

                         
                         
                 

                        </div>
                        <div className="hidden lg:flex items-center">
      <div className="w-px h-full bg-gray-300"></div>
    </div>

                            <div className="   bg-white hidden  lg:max-h-[80vh] lg:overflow-y-auto lg:block  border border-black-500 rounded-md p-5 lg:h-auto lg:w-1/2">
            <img src={`images/profile2.jpg`} className="w-40 mx-auto h-40 rounded-full object-cover" alt="Profile" />
            <h2 className="font-semibold text-2xl text-center">John Doe</h2>
            <h3 className="text-center w-full text-1xl justify-center text-gray-400 flex items-center gap-1">
                Teacher
                <FaCircle className="text-[0.5rem] text-gray-500" />
              Ikeja
                <FaCircle className="text-[0.5rem] text-gray-500" />
                4.5/5.0 <FaStar />
              </h3>
            <div className="mt-4 flex gap-3 mx-auto justify-center w-1/2">
                <FaFacebook className="w-8 h-8 border p-1 rounded-md text-2xl"/>
                <FaInstagram className="w-8 h-8 border p-1 rounded-md text-2xl"/>
                <FaWhatsapp className="w-8 h-8 border p-1 rounded-md text-2xl"/>
            </div>
            <div className="flex gap-4 w-full justify-center mt-6">
                <h3 className="block w-1/5 ">
                    <span className="text-[1.2rem]  flex font-semibold  justify-center">80</span>
                    <span className="flex  justify-center">Contracts</span>
                </h3>
                <h3 className="block w-1/5 ">
                    <span className="text-[1.2rem]  flex font-semibold justify-center">7</span>
                    <span className="flex  justify-center">Likes</span>
                </h3>
                <h3 className="block w-1/5 ">
                    <span className="text-[1.2rem]  font-semibold flex  justify-center">22</span>
                    <span className="flex  justify-center">Reviews</span>
                </h3>
            </div>
            <button className="mt-6 bg-[#340352] text-white rounded-md py-3 px-5 border  mx-auto flex">Send a Booking</button>


                            </div>
                      
                </div>

            </div>
            <Footer />
            </div>

           {openProfile && <div className="z-20 fixed  left-0 lg:hidden h-[100vh] bg-white w-full top-0 ">
            <span onClick={closeProfile} className="p-2 cursor:pointer text-[1.4rem] flex items-center">
                    <FaArrowLeft />
                    
            </span>
            
            <img src={`images/${users.find((item) => item.userId === active).image}`} className="w-40 mx-auto h-40 rounded-full object-cover" alt="Profile" />
            <h2 className="font-semibold text-2xl text-center">{users.find((item) => item.userId === active).name}</h2>
            <h3 className="text-center w-full text-1xl justify-center text-gray-400 flex items-center gap-1">
            {users.find((item) => item.userId === active).occupation}
                <FaCircle className="text-[0.5rem] text-gray-500" />
                {users.find((item) => item.userId === active).location}
                <FaCircle className="text-[0.5rem] text-gray-500" />
                {users.find((item) => item.userId === active).rating}/5.0 <FaStar />
              </h3>
            <div className="mt-4 flex gap-3 mx-auto justify-center w-1/2">
                <FaFacebook className="w-8 h-8 border p-1 rounded-md text-2xl"/>
                <FaInstagram className="w-8 h-8 border p-1 rounded-md text-2xl"/>
                <FaWhatsapp className="w-8 h-8 border p-1 rounded-md text-2xl"/>
            </div>
            <div className="flex gap-4 w-full justify-center mt-6">
                <h3 className="block w-1/5 ">
                    <span className="text-[1.2rem]  flex font-semibold  justify-center">80</span>
                    <span className="flex  justify-center">Contracts</span>
                </h3>
                <h3 className="block w-1/5 ">
                    <span className="text-[1.2rem]  flex font-semibold justify-center">7</span>
                    <span className="flex  justify-center">Likes</span>
                </h3>
                <h3 className="block w-1/5 ">
                    <span className="text-[1.2rem]  font-semibold flex  justify-center">22</span>
                    <span className="flex  justify-center">Reviews</span>
                </h3>
            </div>
            <a 
            target="_blank" 
            href={`https://wa.me/${users.find((item) => item.userId === active).whatsapp}?text=Hi%20I%20am%20from%20the%20HireME%20website,%20I%20would%20need%20you%20to%20do%20some%20work%20for%20me.%20I%20need%20a%20${users.find((item) => item.userId === active).occupation}`}
            ><button className="mt-6 bg-[#340352] items-center text-white rounded-md py-3 px-5 border  mx-auto flex"><FaWhatsapp /> Send a Booking</button></a>


                            </div>}
        </>
    );
};

export default Explore;
