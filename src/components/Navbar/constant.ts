import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiFacebookFill } from 'react-icons/ri';
import type { IconType } from 'react-icons';

interface social {
  id: number;
  social: string;
  link: string;
  Icon: IconType;
}

export const socials: social[] = [
  {
    id: 1,
    social: 'instagram',
    link: '',
    Icon: FaInstagram,
  },
  {
    id: 2,
    social: 'Linkedin',
    link: '',
    Icon: FaLinkedinIn,
  },
  {
    id: 3,
    social: 'facebook',
    link: '',
    Icon: RiFacebookFill,
  },
];
