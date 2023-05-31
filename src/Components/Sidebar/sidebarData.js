import { BiUser } from 'react-icons/bi'
import {RiCommunityLine} from 'react-icons/ri'
import {MdOutlineClass, MdOutlineSchool} from 'react-icons/md'

export const SidebarData = [
    {
        title: 'Usuários',
        icon: <BiUser color='##223243'/> ,
        admin: 1,
        items: [
          {
            title: 'Cadastro de Usuário',
            link: '/create-user',
            subadmin: 1,
          },
          {
            title: 'Consulta de Usuário',
            link: '/consult-users',
            subadmin: 1,
          },
        ],
      },
      {
        title: 'Unidades',
        admin: 1,
        admin2: 2,
        icon: <RiCommunityLine color='##223243'/> ,
        items: [
          {
            title: 'Cadastro de Unidade',
            link: '/create-unidade',
            subadmin: 1,
          },
          {
            title: 'Consultar unidades',
            link: '/consult-unidades',
            subadmin: 1,
          },
          {
            title: 'Criar turmas',
            link: '/create-turma',
            subadmin: 1,
            subadmin2: 2,
          }, 
          {
            title: 'Consultar turmas',
            link: '/consult-turmas',
            subadmin: 1,
            subadmin2: 2,
          }, 
        ],
      },

      {
        title: 'Cursos',
        admin: 1,
        admin2: 2,
        icon: <MdOutlineClass color='##223243'/> ,
        items: [
          {
            title: 'Cadastro de Cursos',
            link: '/create-curso',
            subadmin: 1,
          },
          {
            title: 'Consultar Cursos',
            link: '/consult-cursos',
            subadmin: 1,
            subadmin2: 2
          },
          
        ],
      },

      {
        title: 'Alunos',
        admin: 1,
        admin2: 2,
        admin3: 3,
        icon: <MdOutlineSchool color='##223243'/> ,
        items: [
          {
            title: 'Cadastrar Matrícula',
            link: '/create-matricula',
            subadmin: 1,
            subadmin2: 3,
          },
          {
            title: 'Consultar Matrículas',
            link: '/consult-matriculas',
            subadmin: 1,
            subadmin2: 2,
          },
        ],
      },
    ];
