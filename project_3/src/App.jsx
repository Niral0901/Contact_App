import Navbar from "./components/Navbar" ;
import { LuSearch } from "react-icons/lu";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect , useState } from "react";
import {collection , getDocs} from 'firebase/firestore';
import {db} from './config/Firebase';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {IoMdTrash} from  "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {

      try {

        const contactsRef = collection(db,"contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
           id: doc.id,
           ...doc.data(),
          };
        });
        setContacts(contactLists);
        
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);
  return (
   <div className="max-w-[370px] mx-auto px-4">
    <Navbar />
    <div className="flex">
    <div className=" relative flex items-center flex-grow">
      <LuSearch className="text-white text-2xl absolute ml-5"/>
      <input type="text" className="h-10 flex-grow mx-4 rounded-md border border-white bg-transparent text-white pl-8  "/>
    </div>
    <FaCirclePlus className=" text-white text-3xl pt-1  cursor-pointer" />
    
    </div>
    <div className=" mt-4">
      {contacts.map((contacts) => (
        <div key={contacts.id} className =" bg-yellow flex items-center justify-around p-2 border rounded-lg">
          <div className="flex gap-1">
          <HiOutlineUserCircle className=" text-orange text-4xl"/>
          <div className= ""> 
            <h2 className=" font-medium">{contacts.Name}</h2>
            <p className=" text-sm">{contacts.email}</p>
          </div>
          </div>  
          <div className="flex text-3xl"> 
            <RiEditCircleLine />
            <IoMdTrash className=" text-orange"/>
          </div>
        </div>
      ))}
    </div>
   </div>
  )
}

export default App