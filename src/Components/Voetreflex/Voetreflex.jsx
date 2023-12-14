import React from 'react'
import Image from '../../Assets/Voetreflex/Voetreflex.png'

const Voetreflex = () => {
    return (
        <div className="bg-[#f7f1ea] flex flex-col items-center min-h-screen" style={{minHeight:'130vh'}}>
          <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto p-10">
            <div className="flex justify-center lg:justify-start w-full lg:w-1/2 md:mt-7 md:ml-[-120px]">
              <img src={Image} alt="Bindweefselmassage" className="object-contain w-60 h-60 md:w-80 md:h-auto"/>
            </div>
            <div className="text-[#567C49] mt-7 lg:mt-0 w-full lg:w-1/2 md:mr-[180px]">
              <p className="md:text-lg text-[13px] font-bold mb-3 mt-[50px]">
                Voetreflex kan helpen bij onder meer:
              </p>
              <ul className="list-disc pl-5 md:text-lg text-[13px] font-light space-y-1.5">
                <li>stress, burn-out</li>
                <li>spijsverteringsklachten</li>
                <li>vermoeidheid en slaapproblemen</li>
                <li>ademhalingsmoeilijkheden</li>
                <li>dyslexie en ADHD</li>
                <li>rug, nek en schouderklachten</li>
                <li>gewrichts- spierklachten</li>
                <li>luchtwegproblemen zoals astma en bronchitis</li>
                <li>hormonale problemen zoals: menstruatie- en/of overgangsklachten</li>
                <li>spier- en gewrichtspijn, jicht, artrose, reuma</li>
                <li>vocht vasthouden (oedeem)</li>
                <li>hoge- en lage bloeddruk</li>
                <li>zwangerschap, fertiliteitsproblematiek</li>
              </ul>
            </div>
          
          </div>
          <div className='text-[#567C49] md:text-lg text-[13px] font-light md:ml-[125px] md:mr-[125px] ml-10 mt-[-10px] mr-8'>
            <p className='md:mb-12 md:text-[65px] text-lg mb-6'>Voetreflex</p>
            <p className='mb-3'>Voetreflex is een alternatieve behandelmethode die uitgaat van de basisgedachte dat handen en voeten reflexzones hebben die in verbinding staan met alle organen, klieren, zenuwen, botten en weefsels. De therapie werkt holistisch, dat wil zeggen dat ze ervan uitgaat dat lichaam en geest van de mens één zijn. </p>
            <p className='mb-3'>Voetreflex is een prettige en veilige methode voor het herstellen van lichamelijke en emotionele klachten. Door het masseren van bepaalde voetreflexzones wordt de doorbloeding en de energiedoorstroming bevordert. Hierdoor worden afvalstoffen opgeruimd, wordt de opname van voedende stoffen hersteld en daarmee de gezonde circulatie. Dit leidt tot een betere gezondheid, vitaliteit en ontspanning van lichaam en geest. 
                Er ontstaat een betere bloed- en lymfedoorstroming waardoor afvalstoffen gemakkelijker afgevoerd kunnen worden. </p>
            <p className='mb-[80px]'>Voetreflex kan klachten verminderen, lichaam en geest ontspannen, pijn verlichten, preventief werken en ondersteunend zijn in een ziekteproces. Bovendien helpt het om emoties en spanningen te verwerken en meer in balans te komen. Voetreflex heeft ook een sterke preventieve werking. Daarnaast is het natuurlijk heerlijk om te genieten van een ontspannende voetreflex. Voetreflex bewijst al eeuwenlang zijn effectiviteit!</p>
          </div>
        </div>
      );
}

export default Voetreflex
