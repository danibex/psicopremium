import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function VendasSemanais() {
  return (
    <div className={`flex flex-col bg-white shadow-xl rounded-md`}>
      <div>
        <h2>Vendas Semanais</h2>
        <p>Total de 824 vendas</p>
      </div>
      <div>
        <BarChart
          xAxis={[
            { scaleType: 'band', data: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'] }

          ]}
          series={[
            { data: [400, 300, 500, 200, 100, 150, 450] }
 
          ]}
          width={300}
          height={200}
          borderRadius={9}
        />
      </div>
      <div>
        Vendas
        Lucro
      </div>
    </div>
  );
}
