const imageList = [
  "https://blogger.googleusercontent.com/img/a/AVvXsEjjBb00dCLcVIWRSn3k8RtJs08NFtRBklA9FffpDPs4_BRQE49wQieY1V8sRZCrn3X9R31BxcHvPtN10BGNPRNNgV72wNr0hdjKrPZYir8OB0fJqcaBzLrYj61BroKNDy1h3DdGbDe7jZ0J1INHYJ-S40aa6Pndvt81Ctn9135rXMIClB9ZzFt0UfKnHw=s180-c", // Example image URLs
  "https://blogger.googleusercontent.com/img/a/AVvXsEiZ3rtXinzv6pp4KsemTWSW9TaEY5wfa9WYCc19Fi1xJdU0YSycyea0XN5iLwKFExn7DNCQpOu_KzIKS-dhqjpWv-p06fIi15z54qxX4KDmW-NsjRc7orKT7VW0_9DjxuKdCfN-0lZjAC3hh5tvOZBweZVjLRkfyLtd7zJqIDlYnLo0AJQGsJjXItOEjg=s180-c",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5O0smzy_D-WdzwHBusgXI0Mj-GxSOCPfT8M4Z8HggHQp3TxImC55hViFfwP5ZzkjjlfJ0We9wOmzcq_S46-EEcKBZecSSJoZjoONXcr3_bY4QqSTB6fNhy7f9DxldHhUm4yLQopTu2Ul/s180-c/thumbnail_izakaya_woman.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy9vEY1gEeotHjhzzNG8MBGCke1vUA4TWmWialOCjaif4l8ACVS8-mWqif3lJJV6ZaFrqCAtzpW41CIu-TTZQEPb4_KzE0AAQXVxYLPNe6KRCaHufbS1RMqP3CiagLrUwOtw8uT0JldfhqwYFM4Kdp_woUzz4y9drjixjG5IIrOwfmCWNX1jtDDOJPg-E0/s180-c/thumbnail_ai_character2.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKZJ0ozPe5dqcm27XMRGdmsDXbSU1RjQmzpM9Ij8VuSsK81hohgvzO24voij82YSXkyLfyiMarezb9F5gPVUqmALXH4uLjNeV-ZXxUkJ8y2f1ICddVSad2FrkUaMp2wD9dD_U1vUTLk2vG/s180-c/ofuro_sauna_neppashi_woman.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4rLoiPIbTJtsdbrzhh54Kh-jpjHe9SvfHuod-xLZGLe7k-pFiuG1dS97zBGnZnaI8nkBWxJIC8LBw9iitVZ7NHqhypi9bOqkPkX2ZjwB994iywzU-vCzZR5nPO9WaaDq_SFahIRxow02O/s180-c/seiji_souridaijin_bg3.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7VbK6ANRPdqvJ9p61g92fVTzuhKQ8kMRpAvPBI-TdwT9FLClDyA5b_8vhnlNXeCdUo_MJwob3MZp8lPXzA3vPS3Rl7CiIy2RMOhmGx-Urk64dmLqsn9ZnU5zcghvOz-iZPHQe_NxfWgyr/s180-c/figure_cafe.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9V2jKpH6APRCVBFJCEDjNN00RxpDv5CFRSicLM9DwKvbI_7kNcWb1rblXgDT96uD0YeKcEPr6_Jd8lWW2q645eNq77Uh7UMzmRKrDTGsp3f8Wm9woR5JToWQclNEMjRNQbpIdd03I3Zou/s180-c/thumbnail_virus_hanareru_figure.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKcyuDuSl420DtxSfwRxIWGg-aaITHomk5QQXtqURRrzui8pCmwz_DeLW01-J3MI3AcEE5sk5V_Opvsc-BU89V7xx6PcQqwu2AWsrARNpHbXqtaSzYLiwi_YS_frpYr42jimWRcaaSNuJF/s180-c/figure_panic.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkQR7EXho8h38_QTADo28PHzjFGlwFl3a-AiVO19SFZLgsQGHuqK2cAExAVlPv5dRikFtwWOwUVo5LlWYoiEK9WKkiVozFW5ewmr0ymYJsty_PgOG6-gt55PkK6BvbupuYolmZJ0jElOnf_9fDoi3DZGFLkO_Hay2gdFIPf9CJ1AE659lX1y8xI4k1LQ/s180-c/mask_hazusu_outside.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgt4guFJa_-39m2t3pcAahaXHJAChYVr4AdU4CR4-Cby-_eV_dsPafwoL3EXpaZDEKqXqe-veLnGeccuNM9Skix47_4rNwpWdHcvMtjvr4aZ_Eho9SqhaE0n-ASoQ4RkcMMXZSQLbJfj1jL/s180-c/party_drink_rojou_noimikai.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3NeSZdUAJjPtWrvHQfcNkqPoRfCl8wjGLMxpmzhCLTV78zmPItp4Se_S7H8dgVXGnTz8GdWl-EU4gXyaljwvcOUpSmHl_XdLurcl-yBjCTETs6SjQKj3zkh-XeQH11GOIUHKI8WZaxTXS/s180-c/online_nomikai_owaranai_man.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6-IM_CP5kSqH8GHnOwOMAWbGbotgjVo0DihxgPMxj1wGc24SJ3g8_Mgt9uM5Xdr8VioBtdaN-rMOb-lePm2p11tv_N-8woc97aulHpXRTulJleuw4dPdd7ssS-Zf6WuuTLtLcJUmbrbzX/s180-c/gassyuku_sleep_boys.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhazP2BBFXSzh7rKjsut__HQM8yYEEadl91IWqXlms2pK0s24JsTgcZgTxFfzAisJYmg5gGBy0eNXm0Vx53lMNtyEO2h6kenH2PzK7pQcuFuLudpKpA48XozFIT1Mxydjf1_OXoK7QlB8Mk/s180-c/medical_jijo_group_serious.png",
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
};

export default function Card({ word, definition }) {
  const image = getRandomImage();

  return (
    <div
      className="mx-6 my-8
     bg-[#f6f7fb]
    rounded-lg
    flex
    py-6 pr-6 pl-10"
    >
      <div className="w-full rounded-lg text-main-text">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="font-bold">{word}</div>
          </div>
          <div className="flex items-center"></div>
        </div>
        <hr className="text-main-text text-opacity-25 mt-3 mr-6" />
        <div className="text-left mt-5 mr-6">{definition}</div>
      </div>
      <div className="rounded-lg">
        <img
          src={image}
          alt="word"
          className="w-60 
                    h-28 object-cover
                    rounded-lg
                    "
        />
      </div>
    </div>
  );
}
