import users from "@/dummyData/user";
import Link from "next/link";

const Header = () => {

  return (
    <>
      <section className='mt-2.5 mr-2.5 w-full max-w-2xl'>
      <ul className='flex justify-between items-start mb-8 space-x-3 overflow-scroll bg-parent pt-4 rounded drop-shadow-xl'>
        {users.map((user) => (
          <li key={user.id} className="flex flex-none flex-col items-center space-y-1">
            <div className={user.isUpdate ? "bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full" : "border border-gray-300 bg-white border-4 rounded-full"}>
              <Link href='#' className='block bg-white p-1 rounded-full relative'>
                <img src={user.image_url}
                className='w-12 h-12 rounded-full object-cover' 
                />
              </Link>
            </div>
            <Link href='#' className='text-xs text-white'>
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
    </section>
    </>
  );
}

export default Header;