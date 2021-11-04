export function getCalls(inOut = '', from = '2021-11-02', to = '2021-11-02') {
    return fetch(
        `https://api.skilla.ru/mango/getList?date_start=${from}&date_end=${to}&${inOut === '' ? '' : `in_out=${inOut}`}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer qwerty123",
          },
        }
      )
}
