import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { IIndiceRepResponse } from "../../@types/IIndiceRepResponse";

interface IGraficoIndiceReputacao {
  indiceRep: IIndiceRepResponse | undefined;
  quantidadeClientes: number;
}
export const GraficoIndiceReputacao: React.FC<IGraficoIndiceReputacao> = ({ indiceRep, quantidadeClientes }) => {
  const dados = indiceRep?.indices?.slice(0, quantidadeClientes)?.map((item, index) => ({
    ...item,
    uniqueKey: `${item.devedor_id}-${item.conta_id}-${index}`,
  }));

  return (
    <ResponsiveContainer width="105%" height={500}>
      <LineChart
        data={dados}
        margin={{
          top: 100,
          right: 100,
          bottom: 50,
          left: 100,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="devedor_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="i_pag" stroke="#8884d8" />
        <Line type="monotone" dataKey="i_reg" stroke="#82ca9d" />
        <Line type="monotone" dataKey="i_int" stroke="#ffc658" />
        <Line type="monotone" dataKey="i_rep" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};