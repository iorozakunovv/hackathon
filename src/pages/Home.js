import Header from "../components/Header/Header";

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Home() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Header >
        <div className="h1">
          <h1>Асыл Жекшенбеков</h1>
        </div>
        <div className="h6">
          <h6>Книга №428532498</h6>
        </div>
      <div className='calendar'>
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
      </p>
    </div>
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
      </p>
    </div>
</div>
      </Header>
    </>
  );
}
export default Home;