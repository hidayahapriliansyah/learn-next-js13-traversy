import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome To Latihan</h1>
      <ul>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
