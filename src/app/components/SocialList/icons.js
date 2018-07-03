import LinkedinIcon from 'mdi-react/LinkedinIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import FilePdfBoxIcon from 'mdi-react/FilePdfBoxIcon';

export const ICONS = [
  {
    linkProps: {
      href:
        'https://drive.google.com/open?id=1XIyHRUGSbtSWwNm405jo3uuj8x3kecgt',
      title: 'Curriculum vitae',
    },
    wrapperProps: {
      className: 'social-icon-pdf',
    },
    ComponentIcon: FilePdfBoxIcon,
  },
  {
    linkProps: {
      href: 'https://github.com/MateuszJonak',
      title: 'Github Profile',
    },
    wrapperProps: {
      className: 'social-icon-github',
    },
    ComponentIcon: GithubCircleIcon,
  },
  {
    linkProps: {
      href: 'https://www.linkedin.com/in/mateusz-jonak/',
      title: 'Linkedin Profile',
    },
    wrapperProps: {
      className: 'social-icon-linkedin',
    },
    ComponentIcon: LinkedinIcon,
  },
];
