"use client"

import { useState } from 'react';

const PdfViewerComponent: React.FC = () => {
    // Step 1: State to toggle PDF modal
    const [isPdfOpen, setIsPdfOpen] = useState(false);

    // Step 2: Handle button clicks to show or hide the PDF
    const openPdf = () => setIsPdfOpen(true);
    const closePdf = () => setIsPdfOpen(false);

    return (
        <div className="flex flex-col items-center justify-center my-4">
            {/* Step 3: Button to open PDF */}
            <button 
                onClick={openPdf} 
                className="text-black px-4 py-2 rounded-md hover:text-green-500 transition duration-300 font-bold border-2 border-red-500"
                >
                    Åben PDF Menu
            </button>

            {/* Step 4: PDF Modal */}
            {isPdfOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-6xl mt-20">
                        {/* Close button */}
                        <button 
                            onClick={closePdf} 
                            className="border border-red-500 text-black font-bold px-4 py-2 rounded-md mb-4 hover:bg-red-600 hover:text-white transition duration-300 float-right"
                        >
                            Tilbage
                        </button>
                        
                        {/* Display PDF inside iframe */}
                        <iframe 
                            src="/sebi.pdf" // Path to your PDF file
                            className="w-full h-96 border-0"
                            title="PDF Viewer"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PdfViewerComponent;
