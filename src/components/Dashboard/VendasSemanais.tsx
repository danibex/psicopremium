import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function VendasSemanais() {
  return (
    <div className={`flex flex-col bg-white shadow-xl rounded-md p-4 `}>
      <div>
        <h2>Vendas Semanais</h2>
        <p>Total de 824 vendas</p>
      </div>
      <div>
      <BarChart
      series={[
        { data: [200, 100, 150, 250, 300, 150, 100] },
        
      ]}
      height={100}
      width={250}
      xAxis={[{ data: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'], scaleType: 'band',  }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      borderRadius={100}
    />
      </div>
      <div>
        Vendas
        Lucro
      </div>
    </div>
  );
}
