import { useState, useEffect } from 'react';
import { listPhones, phoneDetail } from './services/phone';
import PhoneDetail from './components/PhoneDetail';
import './App.css';

function App() {
  const [phones, setPhones] = useState([]);
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    listPhones().then((data) => {
      setInterval(() => {
        setPhones(data.data);
      }, 2000);
    });
  }, []);

  const handleSelectPhone = (id) => {
    phoneDetail(id).then((data) => {
      setPhone(data.data);
    });
  };

  return (
    <div className='App'>
      <h1>Phones at Phone Cave</h1>

      {(phones.length !== 0 && (
        <ul>
          {phones.map((item) => (
            <li key={item.id}>
              <h4
                className={phone && (phone.id === item.id ? 'black' : '')}
                onClick={() => handleSelectPhone(item.id)}
              >
                {item.name}
              </h4>
            </li>
          ))}
        </ul>
      )) || <div id='loading'></div>}

      {phone && <PhoneDetail model={phone} />}
    </div>
  );
}

export default App;
