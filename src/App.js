// import { useState } from 'react';
// import Barcode from 'react-barcode'

// function App() {
//   const [barcodeValue, setBarcodeValue] = useState('')

//   const handleText = (e) => setBarcodeValue(e.target.value)
//   return (
//     <div>
//       <input type='text' value={barcodeValue} onChange={handleText} />
//       {barcodeValue !== '' && <Barcode value={barcodeValue} />}
//     </div>
//   );
// }

// export default App;

import { useRef, useState } from 'react';
import Barcode from 'react-barcode'
import { useReactToPrint } from 'react-to-print'

function App() {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({ content: () => componentRef.current })
  const [barcodeValue, setBarcodeValue] = useState('')

  const handleText = (e) => setBarcodeValue(e.target.value)

  return (
    <div>
      {barcodeValue !== '' && <Barcode value={barcodeValue} ref={componentRef} />}
      <input type='text' value={barcodeValue} onChange={handleText} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
}

export default App;
