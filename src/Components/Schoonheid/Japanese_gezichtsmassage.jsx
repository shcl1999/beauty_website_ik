import React from 'react'
import Image from '../../Assets/Schoonheid/Japanese gezichtsmassage.png';

const Japanese_gezichtsmassage = () => {
    return (
        <div id='JapanseGezichtsmassage' className="bg-[#f7f1ea] flex flex-col items-center min-h-screen">
            <div className='w-[90%] h-[1px] bg-[#023A15] mx-auto my-3'></div>
          <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto p-10">
            <div className="flex justify-center lg:justify-start w-full lg:w-1/2 md:mt-9 md:ml-[-145px]">
              <img src={Image} alt="Bindweefselmassage" className="object-contain w-60 h-60 md:w-80 md:h-auto"/>
            </div>
            <div className="text-[#567C49] mt-8 lg:mt-0 w-full lg:w-1/2 md:mr-[90px] md:ml-[10px]">
              <h2 className="md:text-[60px] text-[24px] font-bold md:mb-3 mb-3 text-[#023A15]">Japanse gezichtsmassage</h2>
              <p className="md:text-lg text-[13px] font-light mb-1">
                De effecten van een Japanse gezichtsmassage
              </p>
              <ul className="list-disc pl-5 md:text-lg text-[13px] font-light space-y-2">
                <li>Verbetering van de bloedcirculatie</li>
                <li>Bevordering van collageen</li>
                <li>Verbetering van de gezondheid en vitaliteit van de gezichtshuid</li>
                <li>Totaal gevoel van welzijn</li>
              </ul>
            </div>
          </div>
          <div className='text-[#567C49] md:text-lg text-[13px] font-light md:ml-[125px] md:mr-[125px] ml-10 mt-[-10px]'>
            <p>Een Japanse gezichtsmassage is een speciale vorm van gezichtsmassage en betekent letterlijk ‘het traditionele pad van de schoonheid’. Bij deze eeuwenoude massagetechniek uit Japan wordt gebruik gemaakt van technieken uit de acupressuur en lymfedrainage waarbij het doel is om het gezicht een natuurlijke lifting te geven.</p>
            <p>Deze natuurlijke behandeling is erop gericht om veroudering van de gezichtshuid tegen te gaan, de huid te herstellen en de bloedcirculatie te verbeteren.</p>
            <p>Deze cosmetische massage verbetert de bloedcirculatie, zodat er meer zuurstof naar het gezicht stroomt en daardoor kunnen toxines en dode huidcellen verwijderd. Dit helpt het verouderen van het gezicht te vertragen door de effecten van stress en een slappe huid te verminderen. Daarnaast heeft het ook een diepe ontspannende werking.</p>
            <p>Om maximaal effect te behalen met de Japanse gezichtsmassage is het aan te bevelen om deze massage in een kuur te volgen.</p>
          </div>
        </div>
      );
}

export default Japanese_gezichtsmassage
