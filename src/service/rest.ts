import Axios from 'axios';

// base settings
const http = Axios.create({
  timeout: 30000,
});

export async function feachFile(url: string): Promise<any> {
  console.log(url);
  return http.get(url).then((response) => {
    return response.data;
  });
}
