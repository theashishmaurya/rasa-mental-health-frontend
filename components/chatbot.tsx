import {
  faCirclePlay,
  faCoffee,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChatBot() {
  return (
    <div className='my-20 text-center'>
      <div className='font-poppins'>
        <div className='text-xl md:text-2xl'>
          <div className='w-15'>
            You <strong> don't </strong> have to <br></br>
            <strong> Struggle </strong> in silence!
          </div>
          <div className='flex justify-center'>
            <div className='block w-16 my-10 mr-8 cursor-pointer'>
              <FontAwesomeIcon icon={faComment} size='2x' />
            </div>
          </div>
        </div>
        <div className='text-xl md:hidden '>
          Talk with our Conversation AI. Build especially to solve and calm
          anxiety,depression and bring focus back to the life of the people.
        </div>
      </div>
    </div>
  );
}
