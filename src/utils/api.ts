import axios from "axios";

export default async function getData(city: string) {
  let result
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=efdb7a1b6ed34f2e872131926230907&q=${city}`);
    if (!response.ok) {
      throw new Error('Erro na requisição.');
    }
    result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    result = null
    return result
  }
}

export const getDatabyIp = async (ip: string) => {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=efdb7a1b6ed34f2e872131926230907&q=${ip}`)
  const result = await response.json()

  return result
}
export const getIp = async () => {
  const res = await axios.get("https://api.ipify.org/?format=json");
  return res.data.ip
};

export const getWeekDay = async (dias: string) => {
  const dataString = dias
  const dia = new Date(dataString);
  const diaDaSemana = dia.getDay();
  const diasDaSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const nomeDiaDaSemana = diasDaSemana[diaDaSemana];
  return nomeDiaDaSemana
}

export const getHours = async (horasParam: string) => {
  const dataString = horasParam;
  const partes = dataString.split(' ');
  const hora = partes[1];
  const [horas, minutos] = hora.split(':');
  const formatoHora = horas + ":" + minutos;
  return formatoHora
}
export const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
       Authorization: 'Client-ID UfxW1i_m9W0bdS_kiTCrVtmlebku9p3CsSVqkKlrAXo',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};