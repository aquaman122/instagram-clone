import { BsThreeDots, BsFillBookmarkFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { SlPaperPlane } from 'react-icons/sl';

export default function Post(props: any) {
  return (
    <>
      <div className='flex flex-col w-4/5 text-white'>
        <div className='flex items-center justify-between w-full p-2'>
          <div className='flex items-center justify-center space-x-2'>
            <div className='w-10 h-10 bg-white border-2 rounded-full ' />
            <div>username</div>
          </div>
          <div className='w-4 select-none'>
            <BsThreeDots className='text-lg' />
          </div>
        </div>

        <div className='bg-white w-full h-96 border-gray-600 rounded-sm aspect-video' />

        <div className='flex justify-between p-2'>
          <div className='flex space-x-2 text-2xl'>
            <div><AiOutlineHeart /></div>
            <div><FaRegComment /></div>
            <div><SlPaperPlane /></div>
          </div>
          <div className='text-2xl'><BsFillBookmarkFill /></div>
        </div>

        <div className='px-2'>1000 likes</div>
        <div className='p-2'>
          <div className='flex flex-col'>
          {
            new Array(3).fill(0).map((_, i) => (
              <div key={i} className="flex space-x-2 text-sm">
                <div className='font-medium'>username</div>  
                <div>comment {i + 1}</div>  
              </div>
            ))
          }
          </div>
        </div>
        <div className='px-2'>3 hours ago</div>
        <form>
          <div className='flex items-center px-2 py-2 mt-1 '>
            <div className='w-full'>
              <input type="text" 
                
                name={`comment ${props.index}`} 
                id={`comment ${props.index}`} 
                className="w-full outline-none bg-black text-sm"
                placeholder='댓글 달기...'
              />
            </div>
          </div>
        </form>
        <div className='mt-3 border-t border-gray-600'></div>
      </div>
    </>
  )
}
