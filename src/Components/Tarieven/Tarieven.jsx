import React from 'react'

const Tarieven = () => {
  return (
    <div className="bg-[#f7f1ea] flex flex-col min-h-screen " style={{minHeight:'100%'}}>
    <div className='md:ml-[200px] ml-3 mt-10 md:mr-[190px] mr-2'>

    {/* <div className='md:w-[105%] w-[95%] h-[1px] bg-[#023A15] mx-auto my-12'></div> */}
    <h1 className='md:text-[66px] text-4xl font-bold text-[#462D10] md:mb-10 md:mt-7'>Pedicure</h1>
    <p className='md:text-[32px] text-lg font-semibold mb-8'>Pedicurebehandelingen</p>

    <div className="grid grid-cols-[8fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Pedicurebehandeling Basis <span className='md:text-[16px] text-[12px] font-light'>(30-45 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€45,-</p>
    </div>
    <p className='italic md:text-[16px] text-[12px] font-light mb-5'>Nagels knippen, verzorgen nagelomgeving, verwijderen eelt,
      ingegroeide nagels en of schimmelnagels, verwijderen likdoorn, voeten
      crème.</p>
    <div className="grid grid-cols-[10fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
            Pedicurebehandeling Complex <span className='md:text-[16px] text-[12px] font-light'>(45-60 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€58,-</p>
    </div>
    <p className='italic md:text-[16px] text-[12px] font-light mb-5'>nagel(s) en-of schimmelnagels, verwijderen likdoorns en verzorgende voeten crème </p>

   
    <div className="grid grid-cols-[6fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Pedicurebehandeling Luxe <span className='md:text-[16px] text-[12px] font-light'>(75 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€80,-</p>
    </div>
    <p className='italic md:text-[16px] text-[12px] font-light mb-5'>Pedicurebehandeling, scrub en voedend masker van Strictly Pure en voetmassage</p>
    
    <div className="grid grid-cols-[12fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
            Pedicurebehandeling diabetische/reumatische voet <span className='md:text-[16px] text-[12px] font-light'>(30-45 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€50,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
            Pedicurebehandeling overige risico voeten <span className='md:text-[16px] text-[12px] font-light'>(30-45 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€50,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
            Deelbehandeling <span className='md:text-[16px] text-[12px] font-light'>(15 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€25,-</p>
    </div>
    <p className='italic md:text-[16px] text-[12px] font-light mb-5'>1 probleem behandeld, bijv 1 likdoorn of 1 kloof</p>

    <div className="grid grid-cols-2 gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
            Teennagels lakken* 
          </p>
          <p className='md:text-[22px]text-[15px] font-bold text-right'>€10,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
            Silicone orthese  
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€25,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
            Nagelbeugel 
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€30,-</p>
    </div>
    <p className='italic md:text-[16px] text-[12px] font-light mb-5'>(alleen icm pedicurebehandeling)</p>

    <div className="grid grid-cols-[2fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
            Nagel 'reparatie' met gel 
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>Per nagel €25,-</p>
    </div>
    <p className='italic md:text-[16px] text-[12px] font-light mb-5'>(alleen icm pedicurebehandeling)</p>

    <div className="grid grid-cols-[7fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
            Voetreflexmassage  <span className='md:text-[16px] text-[12px] font-light'>(45 minuten ontspanning)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€60,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
          Voet en onderbeenmassage <span className='md:text-[16px] text-[12px] font-light'>(30 minuten)</span>
          </p>

          <p className='md:text-[22px] text-[15px] font-bold text-right'>€30,-</p>
          
    </div>
    <p className='italic md:text-[16px] text-[12px] font-light md:mb-10 mb-6'>(alleen icm pedicurebehandeling)</p>
    <p className='italic md:text-[16px] text-[12px] font-light md:mb-12 mb-7 mr-3'>*Nagellak verkrijgbaar in de praktijk. Nagels kunnen alleen gelakt worden als u slippers heeft.</p>


    <p className='md:text-[28px] text-[20px] font-semibold md:mb-8 mb-5 text-[#462D10]'>Manicurebehandelingen*</p>
    <div className="grid grid-cols-[4fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Parafine manicure <span className='md:text-[16px] text-[12px] font-light'>(45 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€45,-</p>
    </div>
    <p className='md:mr-[200px] italic md:text-[18px] text-[12px] font-light'>Nagelriemen verzorgen, nagels knippen, vijlen, scrub, handmassage, handcrème, parafine bad.</p>

    <div className="grid grid-cols-[10fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-md font-semibold'>
          Nagels handen vijlen/knippen 
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€15,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
          Ontspannende handmassage <span className='md:text-[16px] text-[12px] font-light'>(25 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€30,-</p>
    </div>
    <p className='italic md:text-[16px] text-[12px] font-light mb-4'>Inclusief handcrème</p>
    <p className='italic md:text-[16px] text-[12px] font-light md:mb-12 mb-6'>*Manicurebehandelingen zijn alleen mogelijk in combinatie met een andere behandeling</p>
    
    <div className='md:w-[105%] w-[95%] h-[1px] bg-[#023A15] mx-auto md:my-12 my-6'></div>
    <h1 className='md:text-[66px] text-4xl font-bold text-[#462D10] md:mb-10'>Massage</h1>
      <p className='md:text-[28px] text-lg font-semibold md:mb-8 mb-5'>Huidverbeterende massages</p>

      <div className="grid grid-cols-[20fr,1fr] gap-1"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Bindweefsel gezicht & decolleté <span className='md:text-[16px] text-[12px] font-light'>(45 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€60,-</p>
      </div>
      <p className='italic md:text-[16px] text-[12px] font-light mb-5'>Oppervlakte reiniging, bindweefselmassage, dag verzorging</p>

      <div className="grid grid-cols-[4fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Guasha gezichtsmassage <span className='md:text-[16px] text-[12px] font-light'>(45 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€60,-</p>
      </div>
      <p className='italic md:text-[16px] text-[12px] font-light mb-5'>Oppervlakte reiniging, Guasha massage, dag verzorging</p>

      <div className="grid grid-cols-[4fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Japanse gezichtsmassage <span className='md:text-[16px] text-[12px] font-light'>(45 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€60,-</p>
      </div>
      <p className='italic md:text-[16px] text-[12px] font-light mb-5'>Oppervlakte reiniging / Japanse gezichtsmassage / dag verzorging</p>

      <div className="grid grid-cols-[4fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Reiki behandeling  <span className='md:text-[16px] text-[12px] font-light'>(70 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€80,-</p>
      </div>
      <p className='italic md:text-[16px] text-[12px] font-light mb-5'>Reiki behandeling</p>

      <div className="grid grid-cols-[4fr,1fr] gap-2"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Kuurverband massages<span className='md:text-[16px] text-[12px] font-light md:ml-2 ml-1'>5 + 1 behandeling gratis</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>5 x €60,-</p>
      </div>
      <p className='italic md:text-[16px] text-[12px] font-light mb-5'>Bindweefsel, Guasha, Japanse gezichtsmassage</p>

      <div className="grid grid-cols-[4fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Kuurverband<span className='md:text-[16px] text-[12px] font-light md:ml-2 ml-1'>5 + 1 behandeling gratis</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>5 x €80,-</p>
      </div>
      <p className='italic md:text-[16px] text-[12px] font-light md:mb-12 mb-6'>Reiki behandeling</p>

      <div className="grid grid-cols-2 gap-4"> 
          <p className='md:text-[28px] text-[19px] font-semibold md:mb-8 mb-4 text-[#462D10]'>
          Bellabaci cupping
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right md:space-x-4 space-x-2'>
            <span>
              45 min
            </span>
            <span>
              60 min
            </span>
            <span>
              75 min
            </span>
            </p>
      </div>
      
      <div className="grid grid-cols-[2fr,1fr] gap-"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Bellabaci cupping anti-aging
          </p>
          <p className='md:text-[22px] text-[14px] font-bold text-right md:space-x-10 space-x-1'>
            <span>
              €65,-
            </span>
            <span>
              €75,-
            </span>
            <span>
              €90,-
            </span>
            </p>
    </div>

    <div className="grid grid-cols-[2fr,1fr] gap-"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Bellabaci cupping cellulite
          </p>
          <p className='md:text-[22px] text-[14px] font-bold text-right md:space-x-10 space-x-1'>
            <span>
              €65,-
            </span>
            <span>
              €75,-
            </span>
            <span>
              €90,-
            </span>
            </p>
    </div>

    <div className="grid grid-cols-[2fr,1fr] gap-"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Bellabaci cupping stress
          </p>
          <p className='md:text-[22px] text-[14px] font-bold text-right md:space-x-10 space-x-1'>
            <span>
              €65,-
            </span>
            <span>
              €75,-
            </span>
            <span>
              €90,-
            </span>
            </p>
    </div>

    <div className="grid grid-cols-[6fr,1fr]"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Bellabaci cupping kuur<span className='md:text-[16px] text-[12px] font-light ml-2'>45 min 7+1 gratis</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€527,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
          Bellabaci cupping kuur<span className='md:text-[16px] text-[12px] font-light ml-2'>60 min 7+1 gratis</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€604,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
          Bellabaci cupping kuur<span className='md:text-[16px] text-[12px] font-light ml-2'>75 min 7+1 gratis</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€708,-</p>
    </div>
    <p className='md:mr-[200px] italic md:text-[16px] text-[12px] font-light mb-12'>De cupping kuren zijn inclusief een cuppingset voor thuisgebruik.</p>

    <p className='md:text-[28px] text-[20px] font-semibold mb-8'>Speciale voetreflexmassages</p>
    <div className="grid grid-cols-[3fr,1fr]"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Metamorfose voetreflexmassage 
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€80,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
          Verbroken verbindingsmassage 
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€80,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
          Beauty voetreflexmassage 
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€70,-</p>

          <p className='md:text-[22px] text-[15px] font-semibold'>
          Detox voetreflexmassage 
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€70,-</p>
    </div>
    
    <div className='md:w-[105%] w-[95%] h-[1px] bg-[#023A15] mx-auto md:my-12 my-8'></div>
    <h1 className='md:text-[66px] text-4xl font-bold text-[#462D10] md:mb-12 mb-6'>Voetreflextherapie</h1>
    <div className="grid grid-cols-[6fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Therapeutische voetreflex massage <span className='md:text-[16px] text-[12px] font-light'>(60-75 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€75,-</p>
    </div>
    

    <div className='md:w-[105%] w-[95%] h-[1px] bg-[#023A15] mx-auto md:my-12 my-8'></div>
    <h1 className='md:text-[66px] text-4xl font-bold text-[#462D10] md:mb-12 mb-8'>Schoonheid</h1>
    {/* <p className='md:text-[22px] text-md font-semibold'>Huidverbeterende schoonheidsbehandeling basis <span className='md:text-[16px] text-sm font-light'>(60 minuten)</span><span className='font-bold md:ml-[288px] ml-[330px]'>€75,-</span></p>
    <p className='md:mr-[210px] italic md:text-[16px] text-sm font-light mb-5'>Intensieve reiniging met peeling of scrub, stomen, verwijderen van onzuiverheden,epileren van de wenkbrauwen, masker, tijdens het masker massage van decolleté, nek en schouders of een uitgebreide handmassage, dag/nacht verzorging</p> */}
    <div className="grid grid-cols-[12fr,1fr] gap-4"> 
      <p className='md:text-[22px] text-[15px] font-semibold'>
      Huidverbeterende schoonheidsbehandeling booster <span className='md:text-[16px] text-[12px] font-light'>(45 minuten)</span>
      </p>
      <p className='md:text-[22px] text-[15px] font-bold text-right'>60,-</p>
    </div>
    <p className='md:mr-[200px] italic md:text-[16px] text-[12px] font-light mb-8'> Oppervlakte reiniging, dieptereiniging, masker, zuurstof behandeling en dagcreme.</p>

    
    <div className="grid grid-cols-[6fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Huidverbeterende schoonheidsbehandeling plus <span className='md:text-[16px] text-[12px] font-light'>(90 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€100,-</p>
    </div>
    <p className='md:mr-[200px] italic md:text-[16px] text-[12px] font-light mb-8'>Analyse van de huid, oppervlakte reiniging, dieptereiniging, onzuiverheden verwijderen, wenkbrauwen bijwerken klassieke gezichtsmassage*, masker, serum, oogcrème, dag/nacht verzorging.</p>

    <div className="grid grid-cols-[6fr,1fr] gap-4"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Huidverbeterende schoonheidsbehandeling luxe <span className='md:text-[16px] text-[12px] font-light'>(90 minuten)</span>
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€115,-</p>
    </div>
    <p className='md:mr-[200px] italic md:text-[16px] text-[12px] font-light mb-8'>Analyse van de huid, oppervlakte reiniging, dieptereiniging, onzuiverheden verwijderen, wenkbrauwen bijwerken klassieke gezichtsmassage*, ampul, eye patches, peel-off alginaat masker, serum, oogcrème, dag/nacht verzorging.</p>

    <p className='md:mr-[200px] italic md:text-[16px] text-[12px] font-light mb-10'>*Bij schoonheidsbehandelingen is het mogelijk om ipv de klassieke gezichtsmassage een guasha massage of de Japanse gezichtsmassage uit te laten voeren tegen een meerprijs van €12.50.</p>

    <div className="grid grid-cols-[6fr,1fr] "> 
          <p className='md:text-[22px]text-[15px] font-semibold'>
          Wenkbrauwen epileren 
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€12,50-</p>
    </div>
          <p className='md:mr-[200px] italic md:text-[16px] text-[12px] font-light mb-8'>Deze behandelingen kunnen alleen in combinatie met een van de huidverbeterende schoonheidsbehandelingen</p>

    <div className="grid grid-cols-[6fr,1fr]"> 
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Bovenlip of kin waxen  
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€10,-</p>
    </div>
          <p className='md:mr-[200px] italic md:text-[16px] text-[12px] font-light mb-8'>Deze behandelingen kunnen alleen in combinatie met een van de huidverbeterende schoonheidsbehandelingen</p>

    
    <div className="grid grid-cols-[6fr,1fr]">
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Bovenlip en kin waxen
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right'>€18,-</p>
    </div>
          <p className='md:mr-[200px] italic md:text-[16px] text-[12px] font-light mb-8'>Deze behandelingen kunnen alleen in combinatie met een van de huidverbeterende schoonheidsbehandelingen</p>
          
    <div className="grid grid-cols-[6fr,1fr]">      
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Wenkbrauwen of wimpers verven  
          </p>
          <p className='md:text-[22px]text-[15px] font-bold text-right'>€12,50-</p>
    </div>
          <p className='md:mr-[200px] italic md:text-[16px] text-[12px] font-light mb-8'>Deze behandelingen kunnen alleen in combinatie met een van de huidverbeterende schoonheidsbehandelingen</p>

    <div className="grid grid-cols-[6fr,1fr]">
          <p className='md:text-[22px] text-[15px] font-semibold'>
          Verven wenkbrauwen en wimpers
          </p>
          <p className='md:text-[22px] text-[15px] font-bold text-right '>€22,50-</p>
      </div>
          <p className='md:mr-[200px] italic md:text-[16px] text-[12px] font-light mb-8'>Deze behandelingen kunnen alleen in combinatie met een van de huidverbeterende schoonheidsbehandelingen</p>
  

    <div className='md:w-[105%] w-[95%] h-[1px] bg-[#023A15] mx-auto md:my-12 my-8'></div>
    <h1 className='md:text-[66px] text-4xl font-bold text-[#462D10] md:mb-12 mb-8'>Annuleringsbeleid</h1>
    <div className="grid grid-cols-[50fr,1fr] gap-4 mb-10"> 
          <p className='md:text-[22px] text-[15px]'>
          Voor uw afspraak heb ik tijd in mijn agenda gereserveerd. Het kan zijn dat u verhinderd bent
          voor uw afspraak. Laat dit op tijd weten.
          Wanneer u de afspraak binnen 
          <span className='font-bold'> 48 uur </span>
          annuleert of verplaatst, wordt 50% van de geplande
          behandeling in rekening gebracht.
          Wanneer u de afspraak binnen 
          <span className='font-bold'> 24 uur </span>
          annuleert of verplaatst of helemaal niet komt zonder
          afmelding, wordt 100% van de geplande behandeling in rekening gebracht.
          Ik hoop op uw begrip hiervoor
          </p>
    </div>
    </div>
    </div>
  )
}

export default Tarieven
