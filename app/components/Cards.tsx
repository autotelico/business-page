import {v4 as uuidv4} from 'uuid'
import Single from '@/public/single.png';
import Double from '@/public/double.png';
import Triple from '@/public/triple.png';

interface Plan {
  id: string;
  image: string;
  price: number;
  storage: string;
  allowedUsers: number;
  sendUpTo: string;
}

export default function Cards(): JSX.Element {
  const singleUser: Plan = {
    id: uuidv4(),
    image: Single.src,
    price: 149,
    storage: '500 GB',
    allowedUsers: 1,
    sendUpTo: '2 GB',
  };

  const partnership: Plan = {
    id: uuidv4(),
    image: Double.src,
    price: 199,
    storage: '1 TB',
    allowedUsers: 3,
    sendUpTo: '10 GB',
  };

  const groupAccount: Plan = {
    id: uuidv4(),
    image: Triple.src,
    price: 299,
    storage: '5 TB',
    allowedUsers: 10,
    sendUpTo: '20 GB',
  };

  const allPlans: Plan[] = [singleUser, partnership, groupAccount];

  return (
    <div id="cards" className="text-black bg-white py-16 w-full">
      <div id="cards-wrapper" className='mx-auto flex items-center justify-center gap-3 border border-red-500'>
        {allPlans.map((plan) => {
          return <CardUnit plan={plan} key={plan.id} />;
        })}
      </div>
    </div>
  );
}

function CardUnit({ plan }: { plan: Plan }): JSX.Element {
  return (
    <div className="card flex flex-col items-center justify-center shadow-sm shadow-gray-500 hover:bg-gray-200 transition-colors px-5">
      <img src={plan.image} alt="Single User" className='h-[50px] -top-1' />
      <h3>${plan.price}</h3>
      <div className="card-details flex flex-col">
        <p className='border-t border-t-black'>{plan.storage} storage</p>
        <p className='border-t border-t-black'>{plan.allowedUsers} {plan.allowedUsers > 1 ? 'Users' : 'User'} Allowed</p>
        <p className='border-y border-y-black'>Send up to {plan.sendUpTo}</p>
      </div>
      <button>Start Trial</button>
    </div>
  );
}
