import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { IconChartPie, IconCoin } from '@tabler/icons-react';

export default function VendasSemanais() {
  return (
    <div className={`flex flex-col bg-white shadow-xl rounded-md p-4 p-4 `}>
      <div>
        <h2 className={`text-xl font-semibold tracking-tight`}>Vendas Semanais</h2>
        <p className={`font-[600] whitespace-nowrap flex flex-row text-[15px] text-[#2b263de6]`}>Total de 824 vendas</p>
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
      <div className={`flex justify-around items-center w-full text-sm text-[#2b263de6]`}>
        <div className={`flex flex-row justify-center items-center gap-2`}>
          <div className={`p-1 bg-[#EDE4FF] rounded-md`}>
            <IconChartPie size={30} stroke={1.8} color='#8C57FF'/>
          </div>
          <div className={`flex flex-col text-sm`}>
            <p className={`font-semibold`}>3.640</p>
            <p>Vendas</p>
          </div>
        </div>
        <div className={`flex flex-row justify-center items-center gap-2`}>
          <div className={`p-1 bg-[#E4F6D6] rounded-md`}>
            <IconCoin size={30} stroke={1.8} color='#56CA00'/>
          </div>
          <div className={`flex flex-col text-sm`}>
            <p className={`font-semibold`}>$2.460</p>
            <p>Lucro Total</p>
          </div>
        </div>
      </div>
    </div>
  );
}
