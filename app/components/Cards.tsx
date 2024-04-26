import { v4 as uuidv4 } from 'uuid';
import Single from '@/public/single.png';
import Double from '@/public/double.png';
import Triple from '@/public/triple.png';

interface Plan {
  id: string;
  name: string;
  image: string;
  price: number;
  storage: string;
  allowedUsers: number;
  sendUpTo: string;
}

export default function Cards(): JSX.Element {
  const singleUser: Plan = {
    id: uuidv4(),
    name: 'Single User',
    image: Single.src,
    price: 149,
    storage: '500 GB',
    allowedUsers: 1,
    sendUpTo: '2 GB',
  };

  const partnership: Plan = {
    id: uuidv4(),
    name: 'Partnership',
    image: Double.src,
    price: 199,
    storage: '1 TB',
    allowedUsers: 3,
    sendUpTo: '10 GB',
  };

  const groupAccount: Plan = {
    id: uuidv4(),
    name: 'Group Account',
    image: Triple.src,
    price: 299,
    storage: '5 TB',
    allowedUsers: 10,
    sendUpTo: '20 GB',
  };

  const allPlans: Plan[] = [singleUser, partnership, groupAccount];

  return (
    <div id="cards" className="text-black bg-white py-16 w-full">
      <div
        id="cards-wrapper"
        className="max-w-[1240px] mx-auto flex flex-col md:grid md:grid-cols-3 md:gap-10 items-center justify-center gap-3 px-10"
      >
        {allPlans.map((plan) => {
          return <CardUnit plan={plan} key={plan.id} />;
        })}
      </div>
    </div>
  );
}

function CardUnit({ plan }: { plan: Plan }): JSX.Element {
  return (
    <div
      className="card w-full flex flex-col gap-8 items-center 
      justify-center rounded-lg shadow-xl shadow-gray-500 
      bg-white hover:scale-105 duration-300 transition-all px-5 my-10 
     font-semibold"
    >
      <img
        src={plan.image}
        alt="Single User"
        className="-mt-[25px] h-[50px] -top-1 bg-white"
      />
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <h3 className="text-3xl font-bold">${plan.price}</h3>
      <div className="card-details flex flex-col items-center justify-center w-[80%]">
        <p className="border-t w-full text-center">{plan.storage} storage</p>
        <p className="border-t w-full text-center">
          {plan.allowedUsers} {plan.allowedUsers > 1 ? 'Users' : 'User'} Allowed
        </p>
        <p className="border-t w-full text-center">Send up to {plan.sendUpTo}</p>
      </div>
      <button className='w-[200px] text-xl bg-[#00df9a] text-black my-3 py-3 rounded-md'>Start Trial</button>
    </div>
  );
}
