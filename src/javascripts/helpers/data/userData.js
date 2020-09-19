import Leslie from '../../../assets/images/leslie.png';
import Ron from '../../../assets/images/ron.png';
import Garry from '../../../assets/images/garry.png';
import April from '../../../assets/images/april.png';
import Jean from '../../../assets/images/jean-ralphio.png';
import Tom from '../../../assets/images/tom.png';
import Donna from '../../../assets/images/donna.png';
import Pawnee from '../../../assets/images/pawnee.png';

const users = [
  { id: 'user1', name: 'Leslie Knope', img: `${Leslie}` },
  { id: 'user2', name: 'Ron Swanson', img: `${Ron}` },
  { id: 'user3', name: 'Garry Gergich', img: `${Garry}` },
  { id: 'user4', name: 'April Ludgate', img: `${April}` },
  { id: 'user5', name: 'Jean Ralphio', img: `${Jean}` },
  { id: 'user6', name: 'Tom Haverford', img: `${Tom}` },
  { id: 'user7', name: 'Donna Meagle', img: `${Donna}` },
  { id: 'user8', name: 'Pawnee Citizen', img: `${Pawnee}` },
];

const getUsers = () => users;

export default { getUsers };
