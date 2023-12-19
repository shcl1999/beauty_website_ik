import React from 'react';
import Background from '../../Assets/Home/Contact.png';
import Swal from 'sweetalert2';

const Contact = () => {
  const handleContactClick = () => {
    if (window.innerWidth < 450) {
      window.location.href = 'tel:010 4553876';
    } else {
      Swal.fire({
      icon: 'info', 
      title: 'Telefoon nummer ',
      text: '010 4553876',
      confirmButtonText: 'OK',
      confirmButtonColor: '#462D10',
    });
  };
  };

  return (
    <div
      id = 'Contact'
      className="w-full h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f7f1ea',
      }}
    >
    <div className='text-center mb-[100px]'>
    <p className='cormorant text-[#462D10] md:text-[76px] text-[45px]'>Contact</p>
    <p className='font-medium md:text-[24px] text-[16px]'>Energie in evenwicht, balans in leven: ontdek</p>
    <p className='font-medium md:text-[24px]'>de kracht van harmonie.</p>
    <button onClick={handleContactClick} className='border border-black rounded-3xl md:px-[70px] px-8 py-2 mt-4'>
    Afspraak Maken
    </button>
    </div>
    
    </div>
  );
};

export default Contact;

