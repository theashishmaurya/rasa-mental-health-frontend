import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function CalmingMusic() {
  return (
    <div className='my-20 text-center'>
      <div className='font-poppins'>
        <div className='text-xl md:text-start'>
          <div className='md:w-60'>
            Listen to <strong> Calming Musics </strong> <br></br>
            Proved to help in <strong> Anxiety and Improve focus. </strong>
          </div>
          <div className='flex justify-center md:justify-start'>
            <div className='block w-20 my-10 mr-8 cursor-pointer'>
              <FontAwesomeIcon icon={faCirclePlay} size='2x' />
            </div>
            <div className='flex items-center my-10'>
              <div className='bg-[#3D4451] w-2 h-6 rounded mr-2' />
              <div className='bg-[#3D4451] w-2 h-10 rounded mr-2' />
              <div className='bg-[#3D4451] w-2 h-12 rounded mr-2' />
              <div className='bg-[#3D4451] w-2 h-6 rounded mr-2' />
              <div className='bg-gray-400 w-2 h-4 rounded mr-2' />
              <div className='bg-gray-400 w-2 h-10 rounded mr-2' />
              <div className='bg-gray-400 w-2 h-16 rounded mr-2' />
              <div className='bg-gray-400 w-2 h-8 rounded mr-2' />
              <div className='bg-gray-400 w-2 h-4 rounded mr-2' />
              <div className='bg-gray-400 w-2 h-2 rounded mr-2' />
              <div className='bg-gray-400 w-2 h-10 rounded mr-2' />
            </div>
          </div>
        </div>
        <div className='text-xl md:hidden '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          sint consequatur explicabo cumque est asperiores vero minima qui
          quidem earum, tempora nostrum quaerat quam! Ducimus
        </div>
      </div>
    </div>
  );
}
