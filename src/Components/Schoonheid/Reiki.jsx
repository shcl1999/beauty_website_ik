import React from 'react'
import Image from '../../Assets/Schoonheid/Reiki.png'

const Reiki = () => {
    return (
        <div id='Reiki' className="bg-[#f7f1ea] flex flex-col items-center min-h-screen" style={{minHeight: '110vh'}}>
            <div className='w-[90%] h-[1px] bg-[#023A15] mx-auto my-12'></div>
          <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto p-10 mt-[-40px]">
            <div className="flex justify-center lg:justify-start w-full lg:w-1/2 md:mt-9 md:ml-[-49px]">
              <img src={Image} alt="Bindweefselmassage" className="object-contain w-60 h-60 md:w-80 md:h-auto"/>
            </div>
            <div className="text-[#567C49] mt-8 lg:mt-0 w-full lg:w-1/2 md:mr-[90px] md:ml-[-120px]">
              <h2 className="md:text-[60px] text-[24px] font-bold md:mb-3 mb-3 text-[#023A15]">Reiki</h2>
              <p className="md:text-lg text-[13px] mb-1 mt-4 font-bold">
                Voordelen van Reiki:
              </p>
              <p className='md:text-lg text-[13px] font-light'>
              Reiki, wat zich vertaalt naar "universele levensenergie", is een zachte methode die gericht is op het herstel van harmonie in lichaam en geest. Deze helingstechniek staat bekend om het verminderen van stress, het opheffen van energieblokkades en het bereiken van diepe innerlijke rust.
              </p>
            </div>
          </div>
          <div className='text-[#567C49] md:text-lg text-[13px] font-light md:ml-[125px] md:mr-[125px] ml-10 mt-[-10px]'>
            <p>In onze salon gaan we verder dan uiterlijke schoonheid; we omarmen ook het waardevolle van de interne balans. Ontdek de transformatorende kracht van Reiki, een eeuwenoude Japanse helingstechniek die zowel ontspanning als welzijn zwaar nastreeft.</p>
            <p className='mt-4 font-bold'>Voor wie is Reiki geschikt:</p>
            <p>Reiki is geschikt voor een iedereen die streeft naar een holistische benadering van welzijn. Of je nu stress ervaart, lichamelijke ongemakken hebt of krachtige behoefte aan ontspanning, Reiki verleent zich aan de unieke behoeften van elk individu.</p>
            <p className='mb-9'>Laat de kracht van Reiki je leiden naar een diepe staat van ontspanning en harmonie. Maak vandaag nog een afspraak en ontdek de heilzame voordelen van deze eeuwenoude helingstechniek in onze salon. Welzijn begint hier.</p>
          </div>
        </div>
      );
}

export default Reiki
