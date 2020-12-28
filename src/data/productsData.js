import jednorozec from 'assets/images/jednorozec.png';
import kocyk from 'assets/images/kocyk.jpg';
import plecak from 'assets/images/plecak.jpg';
import torebkaRoz from 'assets/images/torebka-roz.jpg';
import kocyknos from 'assets/images/kocyknos.jpg';

export const productsData = [
  {
    id: 1,
    title: 'Kocyk ',
    price: '220 zł',
    desc: 'Kocyk kolorowy dla maluszka',
    color: 'mieszane',
    imageUrl: kocyk,
    createdTime: '10 dni',
  },
  {
    id: 2,
    title: 'Plecak',
    price: '40 zł',
    desc: ' Plecak na wakacyjne wypady',
    color: 'Niebieski',
    imageUrl: plecak,
    createdTime: '10 dni',
  },
  {
    id: 3,
    title: 'Maskotka',
    price: '30 zł',
    desc: ' Kolorowy jednorożec - dziewczynka',
    color: 'Róż',
    imageUrl: jednorozec,
    createdTime: '6 dni',
  },
  {
    id: 4,
    title: 'Torebka',
    price: '225 zł',
    desc: ' Różowa torebka stylowa',
    color: 'Róż',
    imageUrl: torebkaRoz,
    createdTime: '5 dni',
  },
  {
    id: 5,
    title: 'Kocyk - Maskotka',
    price: '220 zł',
    desc: 'Kocyk dla maluszka',
    color: 'Róż',
    imageUrl: kocyknos,
    createdTime: '7 dni',
  },
];
