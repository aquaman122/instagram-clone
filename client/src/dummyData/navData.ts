import {
  AiOutlineHeart as Heart,
  AiFillHome as Home,
  AiOutlineCompass as Compass
} from 'react-icons/ai';
import {
  FiSearch as Search, 
  FiPlusSquare as Square
} from 'react-icons/fi';
import {BiMoviePlay as MoviePlay} from 'react-icons/bi';
import {SlPaperPlane as PaperPlane} from 'react-icons/sl';
import {CgProfile as Profile} from 'react-icons/cg';

export const NAV_ICONS = [
  {
    icon: Home,
    url: '/mainpage',
    name: '홈'
  },
  {
    icon: Search,
    url: '/search',
    name: '검색'
  },
  {
    icon: Compass,
    url: '/compass',
    name: '탐색 탭'
  },
  {
    icon: MoviePlay,
    url: '/moviePlay',
    name: '릴스'
  },
  {
    icon: PaperPlane,
    url: '/paperPlane',
    name: '메세지'
  },
  {
    icon: Heart,
    url: '/heart',
    name: '알림'
  },
  {
    icon: Square,
    url: '/square',
    name: '만들기'
  },
  {
    icon: Profile,
    url: '/profile',
    name: '프로필'
  }
]