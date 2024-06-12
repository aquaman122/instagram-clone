import Link from 'next/link';


const NavIcons = (props: any) => {
  return (
    <>
      <div className='p-3 hover:bg-stone-900 rounded-lg'>        
        <Link href={props.url} className='xl:flex'>
          <props.Icon size={25} />
          <div className='pl-4 text-base sm:max-xl:hidden'>{props.name}</div>
        </Link>
      </div>
    </>
  )
}

export default NavIcons;