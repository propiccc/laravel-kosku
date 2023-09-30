import React from 'react';

function Nota() {
  return (
    <div className="w-1/2 mx-auto p-4 border">
      <h1 className="text-2xl font-bold mb-4">Nota Pembayaran Sewa</h1>
      <div className="mb-4">
        <p><strong>Tanggal Sewa:</strong> 28 September 2023</p>
        <p><strong>User yang Menyewa:</strong> John Doe</p>
      </div>
      <div className="mb-4">
        <p><strong>Deskripsi Item:</strong> Apartemen di Midtown</p>
        <p><strong>Harga Property:</strong> $1,000</p>
      </div>
    </div>
  );
}

export default Nota;