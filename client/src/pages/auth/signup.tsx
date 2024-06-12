'use client'
import '@/app/globals.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { auth, db } from '@/firebase/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';

const SignUp = () => {
  const router = useRouter();
  const [inputUser, setInputUser] = useState({
    numberOrEmail: '',
    username: '',
    usernickname: '',
    password: '',
  });

  const SubmitHandler = async (event: any) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, inputUser.numberOrEmail, inputUser.password);
      const user = userCredential.user;

      // Firestore에 사용자 추가
      await addDoc(collection(db, 'users'), {
        numberOrEmail: inputUser.numberOrEmail,
        username: inputUser.username,
        usernickname: inputUser.usernickname,
      });

      // NextAuth를 사용하여 로그인 처리
      await signIn('credentials', {
        redirect: false,
        email: inputUser.numberOrEmail,
        password: inputUser.password,
      });

      router.push('/auth/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center mt-5'>
      <div>
        <div className='w-80 flex flex-col items-center shrink-0 border border-stone-300 rounded-sm text-center box-border'>
          <div className='h-16 text-4xl mt-2'>Instagram</div>
          <div className='w-60 h-16 text-gray-500 font-bold'>친구들의 사진과 동영상을 보려면 가입하세요.</div>
          <button className='flex justify-center items-center w-64 h-8 border bg-sky-500 rounded-md text-white text-sm active:scale-95 transition font-semibold'>
            <span className='mr-1 text-xl'><AiFillFacebook /></span>
            <span className='text-white hover:cursor-pointer'>Facebook으로 로그인</span>
          </button>
          <div className='flex items-center mt-4 mb-8'>
            <div className='h-px border border-gray-300 w-24'></div>
            <div className='pl-4 pr-4 text-sm text-gray-500'>또는</div>
            <div className='h-px border border-gray-300 w-24'></div>
          </div>
          <form onSubmit={SubmitHandler} className='flex flex-col items-center'>
            <div className='mb-2'>
              <input
                onChange={(event) => setInputUser({ ...inputUser, numberOrEmail: event.target.value })}
                className='w-64 h-9 border border-gray-300 rounded-sm bg-gray-100 text-xs pl-2'
                placeholder='휴대폰 번호 또는 이메일 주소'
                type="email" id='email' name='email' required
              />
            </div>
            <div className='mb-2'>
              <input
                onChange={(event) => setInputUser({ ...inputUser, username: event.target.value })}
                className='w-64 h-9 border border-gray-300 rounded-sm bg-gray-100 text-xs pl-2'
                placeholder='성명'
                type="text" id="name" name='name' required
              />
            </div>
            <div className='mb-2'>
              <input
                onChange={(event) => setInputUser({ ...inputUser, usernickname: event.target.value })}
                className='w-64 h-9 border border-gray-300 rounded-sm bg-gray-100 text-xs pl-2'
                placeholder='사용자 이름'
                type="text" id="nickname" name='nickname' required
              />
            </div>
            <div className='mb-2'>
              <input 
                onChange={(event) => { 
                  setInputUser({
                  ...inputUser,
                  password: event.target.value
                })}}  
                className='w-64 h-9 border border-gray-300 rounded-sm bg-gray-100 text-xs pl-2' 
                placeholder='비밀번호' 
                type="password" id="password" name='password' required />
            </div>
            <div className='w-64 text-xs mb-2'>
              <span >저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 instagram에 업로드했을 수도 있습니다.</span>
              <div>
                <Link href={'/'} className='text-blue-400 hover:cursor-pointer'>더 알아보기</Link>
              </div>
            </div>
          
            <button 
            type='submit' 
            className='w-64 h-8 mb-6 border bg-sky-500 rounded-md text-white text-sm active:scale-95 transition hover:cursor-pointer'>가입</button>
          </form>
        </div>

        <div className='flex justify-center items-center border border-stone-300 mt-4 h-16'>
          <span className='flex text-sm'>
            <p className='pr-1'>계정이 있으신가요?</p>
            <Link href={`/auth/sigin`}><span className='text-blue-500 font-bold hover:cursor-pointer'>로그인</span></Link>
          </span>
        </div>

        <div>
          <div className='mt-4'><span className='flex justify-center items-center hover:cursor-pointer'>앱을 다운로드하세요.</span></div>
          <div>
            
          </div>
        </div>
        </div>
    </div>
  )
}

export default SignUp;